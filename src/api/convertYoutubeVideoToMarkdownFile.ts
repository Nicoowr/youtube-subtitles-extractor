import { buildDependencies } from "../dependencies/buildDependencies";
import {convertYoutubeVideoToMarkdownFileDomain} from "../domain";

export const convertYoutubeVideoToMarkdownFile = async (youtubeUrl: string) => {
  const dependencies = buildDependencies();
  await convertYoutubeVideoToMarkdownFileDomain(dependencies)(youtubeUrl);
};
