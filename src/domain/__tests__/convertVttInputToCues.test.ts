import {
    generateTimestampMapping,
    mergeCuesInsideATimestampStep,
    convertVttInputToCues,
} from "../convertVttInputToCues";
import {type Cue} from "../types";
import {type Dependencies} from "../../dependencies/buildDependencies";

describe("convertVttInputToCues should transform an srt file into a consistent markdown paragraph", () => {
    it("should transform the srt file into an array of chunks with each chunk of the form timestamp + subtitle", () => {
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
            parseVttInput: (input: string): Cue[] => [{
                start: 0,
                end: 1,
                text: "Hello world!"
            }, {start: 30, end: 31, text: "This is a subtitle"}, {
                start: 60,
                end: 61,
                text: "Foo"
            }, {start: 110, end: 111, text: "Bar"}]
        }

        // WHEN
        const result = convertVttInputToCues(dependencies)(vttInput);

        // THEN
        expect(result.length).toBeGreaterThan(0);
    });
    it("should merge cues with respect to the given duration step", () => {
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
        parseVttInput: (input: string): Cue[] => [{
          start: 0,
          end: 1,
          text: "Hello world!"
        }, {start: 30, end: 31, text: "This is a subtitle"}, {
          start: 60,
          end: 61,
          text: "Foo"
        }, {start: 110, end: 111, text: "Bar"}]
      }

        const stepDurationInSeconds = 60;

        // WHEN
        const result = convertVttInputToCues(dependencies)(vttInput, stepDurationInSeconds);

        // THEN
        expect(result).toEqual([
            {start: 0, end: 31, text: "Hello world! This is a subtitle"},
            {
                start: 60,
                end: 111,
                text: "Foo Bar",
            },
        ]);
    });
});

describe("generateTimestampMapping should generate a timestamp mapping for a given array of cues so that for every timestamp, corresponding cues can be merged together", () => {
    it("given the max timestamp of 3600 and a duration step of 45 seconds, should generate the corresponding array", () => {
        // GIVEN
        const maxTimestamp = 300;
        const durationStepInSeconds = 45;

        // WHEN
        const result = generateTimestampMapping({
            maxTimestamp,
            stepDurationInSeconds: durationStepInSeconds,
        });

        // THEN
        expect(result).toEqual([0, 45, 90, 135, 180, 225, 270]);
    });
});

describe("For a given timestamp and a duration step, corresponding cues need to be merged into one", () => {
    it("should return null if no cue is inside the step", () => {
        // GIVEN
        const timestamp = 300;
        const stepDurationInSeconds = 45;
        const cues = [
            {
                start: 0,
                end: 60,
                text: "foo",
            },
            {start: 60, end: 80, text: "bar"},
        ];
        // WHEN
        const result = mergeCuesInsideATimestampStep({
            timestamp,
            stepDurationInSeconds,
        })(cues);

        // THEN
        expect(result).toBeNull();
    });
    it("given the max timestamp of 3600 and a duration step of 45 seconds, should generate the corresponding array", () => {
        // GIVEN
        const timestamp = 55;
        const stepDurationInSeconds = 45;
        const cues: Cue[] = [
            {
                start: 0,
                end: 60,
                text: "foo",
            },
            {start: 60, end: 80, text: "bar"},
            {start: 60, end: 90, text: "baz"},
        ];
        // WHEN
        const result = mergeCuesInsideATimestampStep({
            timestamp,
            stepDurationInSeconds,
        })(cues);

        // THEN
        expect(result).toEqual({start: 60, end: 90, text: "bar baz"});
    });
});
