import { Cue } from "./domain/types";
import { compact } from "lodash";

const webVtt = require("node-webvtt");

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
export const parseVttInput = (
  input: string,
  stepDurationInSeconds?: number
): Cue[] => {
  const cues = webVtt.parse(input, { meta: true }).cues as Cue[];
  if (!stepDurationInSeconds) {
    return cues;
  }

  const timestampsMapping = generateTimestampMapping({
    maxTimestamp: Math.max(...cues.map((cue) => cue.end)),
    stepDurationInSeconds,
  });

  return compact(
    timestampsMapping.map((timestamp) =>
      mergeCuesInsideATimestampStep({
        timestamp,
        stepDurationInSeconds,
      })(cues)
    )
  );
};
