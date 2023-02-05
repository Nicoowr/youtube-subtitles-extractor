import { Cue } from "../domain/types";
import { fetchSubtitlesWithYoutubeDl } from "./fetchSubtitlesWithYoutubeDl";

export type Dependencies = {
  fetchSubtitles: (youtubeLink: string) => Promise<Cue[]>;
};
export const buildDependencies = (): Dependencies => {
  return { fetchSubtitles: fetchSubtitlesWithYoutubeDl };
};
