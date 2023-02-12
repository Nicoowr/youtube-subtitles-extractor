import {promisify} from "util"
import {exec as execNotPromisified} from "child_process"
import fs from "fs"
import glob from "glob";
const exec = promisify(execNotPromisified);

const subtitlesDirectory = "scripts/subtitleFiles"
const findNewestVttFile = (directory: string): string => {
    return glob.sync(`${directory}/*.vtt`)
        .map(name => ({name, ctime: fs.statSync(name).ctime}))
        .sort((a, b) => b.ctime - a.ctime)[0].name
}
export const fetchSubtitlesWithYoutubeDl = async (
  youtubeLink: string
): Promise<string> => {
    // await exec(`cd ${subtitlesDirectory} && youtube-dl --write-sub --sub-lang en --skip-download ${youtubeLink}`);
    await exec(`cd ${subtitlesDirectory} && youtube-dl --write-auto-sub --sub-lang en --skip-download --write-info-json ${youtubeLink}`);

    const newestVttFile = findNewestVttFile(subtitlesDirectory);

    return fs.readFileSync(newestVttFile).toString();
};

