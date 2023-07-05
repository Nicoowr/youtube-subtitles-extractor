import {RadioGroup} from "@headlessui/react";
import {CheckIcon} from "~/lib/CheckIcon";

type Language = "en" | "fr" | "cn" | "es" | "it"

export type SubtitleLanguage = `${Language}-${Language}`;

type Props = {
    availableSubtitles: SubtitleLanguage[]
    selectedSubtitle: SubtitleLanguage | null;
    setSelectedSubtitle: (selectedSubtitle: SubtitleLanguage) => void;
}

const availableSubtitlesMapping: Partial<Record<SubtitleLanguage, string>> = {
    "fr-fr": "Français",
}

export const AvailableSubtitles = ({availableSubtitles, selectedSubtitle, setSelectedSubtitle}: Props) => {

    return <div className="w-full px-4 py-16">
        <div className="mx-auto w-full max-w-md">
            <RadioGroup value={selectedSubtitle} onChange={setSelectedSubtitle}>
                <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                <div className="space-y-2">
                    {availableSubtitles.map((availableSubtitle) => (
                        <RadioGroup.Option
                            key={availableSubtitle}
                            value={availableSubtitlesMapping[availableSubtitle]}
                            className={({ active, checked }) =>
                                `${
                                    active
                                        ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                                        : ''
                                }
                  ${
                                    checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'
                                }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                            }
                        >
                            {({ active, checked }) => (
                                <>
                                    <div className="flex w-full items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="text-sm">
                                                <RadioGroup.Label
                                                    as="p"
                                                    className={`font-medium  ${
                                                        checked ? 'text-white' : 'text-gray-900'
                                                    }`}
                                                >
                                                    {availableSubtitle}
                                                </RadioGroup.Label>
                                            </div>
                                        </div>
                                        {checked && (
                                            <div className="shrink-0 text-white">
                                                <CheckIcon className="h-6 w-6" />
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}
                        </RadioGroup.Option>
                    ))}
                </div>
            </RadioGroup>
        </div>
    </div>
}