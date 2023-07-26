import { promisify } from "util";
import { exec as execNotPromisified } from "child_process";
import { type SubtitleLanguage } from "../domain/types";

const exec = promisify(execNotPromisified);

const originalLanguageRegex = /(?<![a-zA-Z-])([a-zA-Z]{2})(?![a-zA-Z-])/g; // This regex will match subtitles of type fr-fr , not en-fr

export const fetchAvailableSubtitles = async ({
  youtubeUrl,
}: {
  youtubeUrl: string;
}): Promise<SubtitleLanguage[]> => {
  const result = await exec(`yt-dlp --list-subs ${youtubeUrl}`);
  const rawAvailableSubtitles = result.stdout;

  const originalSubtitlesMatched = rawAvailableSubtitles.match(
    originalLanguageRegex
  );

  console.log(originalSubtitlesMatched);
  return (originalSubtitlesMatched || []) as SubtitleLanguage[];
};
