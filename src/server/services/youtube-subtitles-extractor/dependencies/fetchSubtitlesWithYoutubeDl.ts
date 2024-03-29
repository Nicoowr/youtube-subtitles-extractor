import { promisify } from "util";
import { exec as execNotPromisified } from "child_process";
import fs from "fs";
import glob from "glob";
import { type Chapter } from "../domain/types";
import { type Dependencies } from "./buildDependencies";

const exec = promisify(execNotPromisified);

const subtitlesDirectory = "/tmp";
const findNewestVttFile = (directory: string, extension: string): string => {
  return glob
    .sync(`${directory}/*.${extension}`)
    .map((name) => ({ name, ctime: fs.statSync(name).ctime }))
    .sort((a, b) => b.ctime.getTime() - a.ctime.getTime())[0].name;
};
// TODO: handle chapters extraction, specifically the file fetching part (what happens if there is not chapter, might need an identifier)
export const fetchSubtitlesWithYoutubeDl: Dependencies["fetchSubtitles"] =
  async (
    youtubeLink: string
  ): Promise<{ subtitles: string; chapters?: Chapter[] }> => {
    await exec(
      `cd ${subtitlesDirectory} && yt-dlp --write-subs --sub-lang "en.*" --skip-download --write-info-json --convert-subs vtt ${youtubeLink}`
    );

    const newestVttFile = findNewestVttFile(subtitlesDirectory, "vtt");

    const subtitles = fs.readFileSync(newestVttFile).toString();
    const newestMetadataFile = findNewestVttFile(subtitlesDirectory, "json");

    if (newestMetadataFile) {
      const metadata = JSON.parse(
        fs.readFileSync(newestMetadataFile).toString()
      ) as {
        chapters?: Array<{
          start_time: number;
          end_time: number;
          title: string;
        }>;
      };
      if (metadata.chapters) {
        return {
          subtitles,
          chapters: metadata.chapters.map((chapter) => ({
            start: chapter.start_time,
            end: chapter.end_time,
            title: chapter.title,
          })),
        };
      }
    }
    return { subtitles };
  };
