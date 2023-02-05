import { buildDependencies } from "../dependencies/buildDependencies";
import {convertYoutubeVideoToMarkdownFileDomain} from "../domain";
import {type ConversionOptions} from "../domain/types";

export const convertYoutubeVideoToMarkdownFile = async (youtubeUrl: string, options?: ConversionOptions) => {
  const dependencies = buildDependencies();
  await convertYoutubeVideoToMarkdownFileDomain(dependencies)(youtubeUrl, options);
};
