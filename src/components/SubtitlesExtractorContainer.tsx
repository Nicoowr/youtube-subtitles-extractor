import {Input} from "~/components/Input";
import {SubmitYoutubeUrl} from "~/components/SubmitYoutubeUrl";
import {Spinner} from "flowbite-react";
import {useState} from "react";
import {api} from "~/utils/api";
import {Title} from "~/components/Title";
import {
    AvailableSubtitles,
    SubtitleLanguage
} from "~/components/AvailableSubtitles";

export const SubtitlesExtractorContainer = () => {

    const [youtubeUrl, setYoutubeUrl] = useState<string>("")
    const [availableSubtitles, setAvailableSubtitles] = useState<SubtitleLanguage[]>([])
    const [subtitles, setSubtitles] = useState<string>("")
    const {
        mutate,
        isLoading,
    } = api.router["available-subtitles"].useMutation({onSuccess: (data) => setAvailableSubtitles(data.availableSubtitles)});
    const handleSubmit = () => {
        mutate({youtubeUrl});
    }

    return <div
        className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <Title/>
        <div className="flex">
            <Input setYoutubeUrl={setYoutubeUrl}/>
            <SubmitYoutubeUrl handleSubmit={handleSubmit} isLoading={isLoading}/>
        </div>
        <AvailableSubtitles availableSubtitles={availableSubtitles}/>
        {isLoading ? <Spinner/> :
            <p className="text-2xl text-white">
                {availableSubtitles}
            </p>}
    </div>
}