import {type Cue} from "../domain/types";
import {fetchSubtitlesWithYoutubeDl} from "./fetchSubtitlesWithYoutubeDl";
import {parseVttInput} from "./parseVttInput";

export type Dependencies = {
    fetchSubtitles: (youtubeLink: string) => Promise<string>;
    parseVttInput: (input: string) => Cue[];
}
export const buildDependencies = (): Dependencies => {
    return {
        fetchSubtitles: fetchSubtitlesWithYoutubeDl,
        parseVttInput,
    };
};
