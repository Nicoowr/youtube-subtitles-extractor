import {type Cue} from "../domain/types";

const webVtt = require("node-webvtt");

export const parseVttInput = (input: string) => webVtt.parse(input, {meta: true}).cues as Cue[]