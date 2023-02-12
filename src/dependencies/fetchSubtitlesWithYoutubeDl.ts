import {promisify} from "util"
import {exec as execNotPromisified} from "child_process"
import fs from "fs"
import glob from "glob";
import {Chapter} from "../domain/types";

const exec = promisify(execNotPromisified);

const subtitlesDirectory = "scripts/subtitleFiles"
const findNewestVttFile = (directory: string, extension: string): string => {
    return glob.sync(`${directory}/*.${extension}`)
        .map(name => ({name, ctime: fs.statSync(name).ctime}))
        .sort((a, b) => b.ctime - a.ctime)[0].name
}
// TODO: handle chapters extraction, specifically the file fetching part (what happens if there is not chapter, might need an identifier)
export const fetchSubtitlesWithYoutubeDl = async (
    youtubeLink: string
): Promise<{ subtitles: string; chapters?: Chapter[] }> => {
    await exec(`cd ${subtitlesDirectory} && youtube-dl --all-subs --skip-download ${youtubeLink}`);

    const newestVttFile = findNewestVttFile(subtitlesDirectory, "vtt");
    const newestMetadataFile = findNewestVttFile(subtitlesDirectory, "json");

    if (newestMetadataFile) {

    }
    return {subtitles: fs.readFileSync(newestVttFile).toString(), chapters: };
};

