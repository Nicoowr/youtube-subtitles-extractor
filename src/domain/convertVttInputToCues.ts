import { compact } from "lodash";
import {type ConversionOptions, type Cue} from "./types";
import {type Dependencies} from "../dependencies/buildDependencies";

export const generateTimestampMapping = ({
  maxTimestamp,
  stepDurationInSeconds,
}: {
  maxTimestamp: number;
  stepDurationInSeconds: number;
}) => {
  const quotient = Math.floor(maxTimestamp / stepDurationInSeconds);

  return Array.from(Array(quotient + 1).keys()).map(
    (stepIndex) => stepIndex * stepDurationInSeconds
  );
};

export const mergeCuesInsideATimestampStep =
  ({
    timestamp,
    stepDurationInSeconds,
  }: {
    timestamp: number;
    stepDurationInSeconds: number;
  }) =>
  (cues: Cue[]): Cue | null => {
    const cuesInsideStep = cues.filter(
      (cue) =>
        cue.start >= timestamp && cue.start < timestamp + stepDurationInSeconds
    );
    if (cuesInsideStep.length === 0) {
      return null;
    }
    return {
      start: cuesInsideStep[0].start,
      end: cuesInsideStep[cuesInsideStep.length - 1].end,
      text: cuesInsideStep.map((cue) => cue.text).join(" "),
    };
  };

// TODO: here the domain is coupled to VTT format. Should I make the conversion in the API ?
export const convertVttInputToCues = ({parseVttInput}: Dependencies) => (
  input: string,
  options?: ConversionOptions
): Cue[] => {
  const cues = parseVttInput(input);
  if (!options?.stepDurationInSeconds) {
    return cues;
  }

  const cleanCues = cues.map(cue => ({...cue, text: cue.text.replace(/\n/g, " ")}))
  const timestampsMapping = generateTimestampMapping({
    maxTimestamp: Math.max(...cleanCues.map((cue) => cue.end)),
    stepDurationInSeconds: options.stepDurationInSeconds,
  });

  return compact(
    timestampsMapping.map((timestamp) =>
      mergeCuesInsideATimestampStep({
        timestamp,
        stepDurationInSeconds: options.stepDurationInSeconds,
      })(cleanCues)
    )
  );
};
