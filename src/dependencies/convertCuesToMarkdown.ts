import {type Cue} from "../domain/types";
import json2md from "json2md";

const convertTimestampToTimeString = (durationInSeconds: number) => new Date(1000 * durationInSeconds).toISOString().substring(11, 19)
export const convertCuesToMarkdown = (cues: Cue[]): string => {
    const formattedCuesForMarkdown = cues.map(cue => ({p: `${convertTimestampToTimeString(cue.start)} - ${cue.text}`}))
    return json2md(formattedCuesForMarkdown);
}