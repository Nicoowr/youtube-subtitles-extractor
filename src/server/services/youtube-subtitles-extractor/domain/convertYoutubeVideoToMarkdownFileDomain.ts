import { type Dependencies } from "../dependencies/buildDependencies";
import { convertVttInputToCues } from "./convertVttInputToCues";
import { type SubtitleLanguage } from "./types";

export const convertYoutubeVideoToMarkdownFileDomain =
  (dependencies: Dependencies) =>
  async ({
    youtubeUrl,
    language,
  }: {
    youtubeUrl: string;
    language: SubtitleLanguage;
  }) => {
    const vttSubtitles = await dependencies.fetchSubtitles({
      youtubeUrl,
      language,
    });
    const cues = convertVttInputToCues(dependencies)(
      vttSubtitles.subtitles,
      vttSubtitles.chapters
    );
    const markdownString = dependencies.convertCuesToMarkdown(cues);

    console.log("Extracted markdown: ");
    console.log(markdownString);

    return markdownString;
  };
