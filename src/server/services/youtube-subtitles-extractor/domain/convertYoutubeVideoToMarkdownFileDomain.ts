import {type Dependencies} from "../dependencies/buildDependencies";
import {convertVttInputToCues} from "./convertVttInputToCues";

export const convertYoutubeVideoToMarkdownFileDomain = (dependencies: Dependencies) => async (youtubeUrl: string) => {
    const vttSubtitles = await dependencies.fetchSubtitles(youtubeUrl);
    const cues = convertVttInputToCues(dependencies)(vttSubtitles.subtitles, vttSubtitles.chapters);
    const markdownString = dependencies.convertCuesToMarkdown(cues);

    console.log("Extracted markdown: ")
    console.log(markdownString);

    return markdownString;
};


