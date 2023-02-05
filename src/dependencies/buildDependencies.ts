import {type Cue} from "../domain/types";
import {fetchSubtitlesWithYoutubeDl} from "./fetchSubtitlesWithYoutubeDl";

const webVtt = require("node-webvtt");

export type Dependencies = {
    fetchSubtitles: (youtubeLink: string) => Promise<Cue[]>;
    parseVttInput: (input: string) => Cue[];
}
export const buildDependencies = (): Dependencies => {
    return {
        fetchSubtitles: fetchSubtitlesWithYoutubeDl,
        parseVttInput: (input: string) => webVtt.parse(input, {meta: true}).cues as Cue[]
    };
};
