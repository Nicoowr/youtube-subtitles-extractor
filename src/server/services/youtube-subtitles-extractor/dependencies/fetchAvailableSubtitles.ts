import {promisify} from "util"
import {exec as execNotPromisified} from "child_process"
import {
    SubtitleLanguage
} from "~/server/services/youtube-subtitles-extractor/domain/types";

const exec = promisify(execNotPromisified);


const originalLanguageRegex = /([a-z]{2})-\1/g // This regex will match subtitles of type fr-fr , not en-fr

export const fetchAvailableSubtitles = async ({youtubeUrl}: {youtubeUrl: string}): Promise<SubtitleLanguage[]> => {
    const result = await exec(`yt-dlp --list-subs ${youtubeUrl}`);
    const rawAvailableSubtitles = result.stdout

    const originalSubtitlesMatched = rawAvailableSubtitles.match(originalLanguageRegex);

    return (originalSubtitlesMatched || []) as SubtitleLanguage[]
}