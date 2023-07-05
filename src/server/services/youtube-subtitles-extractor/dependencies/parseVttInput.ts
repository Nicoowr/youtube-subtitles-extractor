import { type Cue } from "../domain/types";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const webVtt = require("node-webvtt");

export const parseVttInput = (input: string) =>
  webVtt.parse(input, { meta: true }).cues as Cue[];
