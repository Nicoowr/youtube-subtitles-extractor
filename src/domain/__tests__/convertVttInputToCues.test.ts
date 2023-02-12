import {
  convertVttInputToCues,
} from "../convertVttInputToCues";
import { type Cue } from "../types";
import { type Dependencies } from "../../dependencies/buildDependencies";

describe("convertVttInputToCues should transform an srt file into a consistent markdown paragraph", () => {
  it("should transform the srt file into an array of cues with each cue of the form timestamp + subtitle", () => {
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
});
