import {
  convertVttInputToCues,
  mergeCuesInsideAChapter,
} from "../convertVttInputToCues";
import { type Cue } from "../types";
import { type Dependencies } from "../../dependencies/buildDependencies";

describe("convertVttInputToCues should transform an srt file into a consistent markdown paragraph", () => {
  it("should transform the srt file into one cue if no chapter is specified", () => {
    // GIVEN
    const vttInput =
      "WEBVTT\n" +
      "\n" +
      "00:00:00.000 --> 00:00:01.000\n" +
      "Hello world!\n" +
      "\n" +
      "00:00:30.000 --> 00:00:31.000 align:start line:0%\n" +
      "This is a subtitle\n" +
      "\n" +
      "00:01:00.000 --> 00:01:01.000\n" +
      "Foo\n" +
      "\n" +
      "00:01:50.000 --> 00:01:51.000\n" +
      "Bar";
    const dependencies: Dependencies = {
      parseVttInput: (input: string): Cue[] => [
        {
          start: 0,
          text: "Hello world!",
        },
        { start: 30, text: "This is a subtitle" },
        {
          start: 60,
          text: "Foo",
        },
        { start: 110, text: "Bar" },
      ],
    };

    // WHEN
    const result = convertVttInputToCues(dependencies)(vttInput);

    // THEN
    expect(result).toMatchInlineSnapshot(`
      [
        {
          "start": 0,
          "text": "Hello world! This is a subtitle Foo Bar",
        },
      ]
    `);
  });
  it("should merge cues within each chapter when chapters are specified", () => {
    // GIVEN
    const vttInput =
      "WEBVTT\n" +
      "\n" +
      "00:00:00.000 --> 00:00:01.000\n" +
      "Hello world!\n" +
      "\n" +
      "00:00:30.000 --> 00:00:31.000 align:start line:0%\n" +
      "This is a subtitle\n" +
      "\n" +
      "00:01:00.000 --> 00:01:01.000\n" +
      "Foo\n" +
      "\n" +
      "00:01:50.000 --> 00:01:51.000\n" +
      "Bar";
    const chapters = [
      { start: 0, end: 31, title: "First part" },
      {
        start: 31,
        end: 120,
        title: "Second part",
      },
    ];
    const dependencies: Dependencies = {
      parseVttInput: (input: string): Cue[] => [
        {
          start: 0,
          text: "Hello world!",
        },
        { start: 30, text: "This is a subtitle\n" },
        {
          start: 60,
          text: "Foo",
        },
        { start: 110, text: "Bar" },
      ],
    };

    // WHEN
    const result = convertVttInputToCues(dependencies)(vttInput, chapters);

    // THEN
    expect(result).toEqual([
      {
        start: 0,
        text: "Hello world! This is a subtitle",
        chapterTitle: "First part",
      },
      {
        start: 60,
        text: "Foo Bar",
        chapterTitle: "Second part",
      },
    ]);
  });
});

describe("For a given chapter, corresponding cues need to be merged into one", () => {
  it("should return null if no cue is inside the chapter", () => {
    // GIVEN
    const chapter = {
      start: 300,
      end: 345,
      title: "First part",
    };
    const cues = [
      {
        start: 0,
        end: 60,
        text: "foo",
      },
      { start: 60, end: 80, text: "bar" },
    ];
    // WHEN
    const result = mergeCuesInsideAChapter(chapter)(cues);

    // THEN
    expect(result).toBeNull();
  });
  it("given a chapter starting at 55s and finishing at 100s, should generate the corresponding array", () => {
    // GIVEN
    const chapter = {
      start: 55,
      end: 100,
      title: "First part",
    };
    const cues: Cue[] = [
      {
        start: 0,
        text: "foo",
      },
      { start: 60, text: "bar" },
      { start: 60, text: "baz" },
    ];
    // WHEN
    const result = mergeCuesInsideAChapter(chapter)(cues);

    // THEN
    expect(result).toEqual({
      start: 60,
      text: "bar baz",
      chapterTitle: "First part",
    });
  });
});
