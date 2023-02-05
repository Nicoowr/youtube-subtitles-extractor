import {type Cue} from "../domain/types";
import {fetchSubtitlesWithYoutubeDl} from "./fetchSubtitlesWithYoutubeDl";
import {parseVttInput} from "./parseVttInput";
import {convertCuesToMarkdown} from "./convertCuesToMarkdown";
import {saveMarkdownFile} from "./saveMarkdownFile";

export type Dependencies = {
    fetchSubtitles: (youtubeLink: string) => Promise<string>;
    parseVttInput: (input: string) => Cue[];
    convertCuesToMarkdown: (cues: Cue[]) => string;
    saveMarkdownFile: (markdownString: string) => Promise<void>;
}
export const buildDependencies = (): Dependencies => {
    return {
        fetchSubtitles: fetchSubtitlesWithYoutubeDl,
        parseVttInput,
        convertCuesToMarkdown,
        saveMarkdownFile,
    };
};
