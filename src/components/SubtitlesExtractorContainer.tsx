import { useState } from "react";
import {
  AvailableSubtitlesLanguages,
  type SubtitleLanguage,
} from "./AvailableSubtitlesLanguages";
import { api } from "../utils/api";
import { Title } from "./Title";
import { Input } from "./Input";
import { SubmitYoutubeUrl } from "./SubmitYoutubeUrl";
import { Subtitles } from "./Subtitles";
import { Spinner } from "flowbite-react";

export const SubtitlesExtractorContainer = () => {
  const [youtubeUrl, setYoutubeUrl] = useState<string>("");
  const [availableSubtitlesLanguages, setAvailableSubtitlesLanguages] =
    useState<SubtitleLanguage[]>([]);
  const [subtitles, setSubtitles] = useState<string>("");
  const {
    mutate: fetchAvailableSubtitlesLanguages,
    isLoading: isFetchingAvailableSubtitlesLanguages,
  } = api.router["available-subtitles-languages"].useMutation({
    onSuccess: (data) =>
      setAvailableSubtitlesLanguages(data.availableSubtitlesLanguages),
  });
  const handleFetchAvailableSubtitlesLanguages = () => {
    fetchAvailableSubtitlesLanguages({ youtubeUrl });
  };

  const { mutate: fetchSubtitles, isLoading: isFetchingSubtitles } = api.router[
    "fetch-subtitles"
  ].useMutation({ onSuccess: (data) => setSubtitles(data.subtitles) });
  const handleFetchAvailableSubtitles = (
    selectedSubtitlesLanguage: SubtitleLanguage
  ) => {
    fetchSubtitles({ youtubeUrl, language: selectedSubtitlesLanguage });
  };

  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      <Title />
      <div className="flex">
        <Input setYoutubeUrl={setYoutubeUrl} />
        <SubmitYoutubeUrl
          handleSubmit={handleFetchAvailableSubtitlesLanguages}
          isLoading={isFetchingAvailableSubtitlesLanguages}
        />
      </div>
      <AvailableSubtitlesLanguages
        fetchSubtitlesInSelectedLanguage={handleFetchAvailableSubtitles}
        availableSubtitles={availableSubtitlesLanguages}
      />
      {isFetchingSubtitles ? (
        <Spinner color={"info"} />
      ) : (
        <Subtitles subtitles={subtitles} />
      )}
    </div>
  );
};
