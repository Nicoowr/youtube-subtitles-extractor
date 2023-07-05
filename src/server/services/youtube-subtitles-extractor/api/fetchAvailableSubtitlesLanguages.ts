import { fetchAvailableSubtitles as fetchAvailableSubtitlesFromDependencies } from "../dependencies/fetchAvailableSubtitles";

export const fetchAvailableSubtitlesLanguages = async ({
  youtubeUrl,
}: {
  youtubeUrl: string;
}) => {
  return fetchAvailableSubtitlesFromDependencies({ youtubeUrl });
};
