import {type Dependencies} from "../dependencies/buildDependencies";
import {convertVttInputToCues} from "./convertVttInputToCues";

// TODO: que peut-on faire dans l'API ?
//  domaine qui importe du domaine ? dep qui importe des dep? api qui importe des dep ?
//  conversion en markdown = dep ?
export const convertYoutubeVideoToMarkdownFileDomain = (dependencies: Dependencies) => async (youtubeUrl: string) => {
    const vttSubtitles = await dependencies.fetchSubtitles(youtubeUrl);
    const cues = convertVttInputToCues(dependencies)(vttSubtitles.subtitles, vttSubtitles.chapters);
    const markdownString = dependencies.convertCuesToMarkdown(cues);

    console.log("Extracted markdown: ")
    console.log(markdownString);

    return markdownString;
};
