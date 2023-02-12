import {type Dependencies} from "../dependencies/buildDependencies";
import {convertVttInputToCues} from "./convertVttInputToCues";
import {type ConversionOptions} from "./types";

// TODO: que peut-on faire dans l'API ?
//  domaine qui importe du domaine ? dep qui importe des dep? api qui importe des dep ?
//  conversion en markdown = dep ?
export const convertYoutubeVideoToMarkdownFileDomain = (dependencies: Dependencies) => async (youtubeUrl: string, options?: ConversionOptions) => {
    const vttSubtitles = await dependencies.fetchSubtitles(youtubeUrl);
    const cues = convertVttInputToCues(dependencies)(vttSubtitles, options);
    const markdownString = dependencies.convertCuesToMarkdown(cues);
    await dependencies.saveMarkdownFile(markdownString);
};
