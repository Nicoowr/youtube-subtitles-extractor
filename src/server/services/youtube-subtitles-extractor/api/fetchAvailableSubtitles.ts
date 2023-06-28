import {fetchAvailableSubtitles as fetchAvailableSubtitlesFromDependencies} from "../dependencies/fetchAvailableSubtitles"

export const fetchAvailableSubtitles = async ({youtubeUrl}: {youtubeUrl: string}) => {
    return fetchAvailableSubtitlesFromDependencies({youtubeUrl})
}