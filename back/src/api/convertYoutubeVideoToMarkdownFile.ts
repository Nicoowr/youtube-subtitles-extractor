import { buildDependencies } from "../dependencies/buildDependencies";
import {convertYoutubeVideoToMarkdownFileDomain} from "../domain";

const convertYoutubeVideoToMarkdownFile = async (youtubeUrl: string) => {
  const dependencies = buildDependencies();
  await convertYoutubeVideoToMarkdownFileDomain(dependencies)(youtubeUrl);
};


export const handler = async (event: {payload: {youtubeUrl: string}}) => {
  await convertYoutubeVideoToMarkdownFile(event.payload.youtubeUrl);
}