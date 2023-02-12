import {compact} from "lodash";
import {type Chapter, type Cue} from "./types";
import {type Dependencies} from "../dependencies/buildDependencies";

export const mergeCuesInsideAChapter =
  (chapter: Chapter) =>
  (cues: Cue[]): Cue | null => {
    const cuesInsideStep = cues.filter(
      (cue) =>
        cue.start >= chapter.start && cue.start < chapter.end
    );
    if (cuesInsideStep.length === 0) {
      return null;
    }
    return {
      start: cuesInsideStep[0].start,
      text: cuesInsideStep.map((cue) => cue.text).join(" ").trim(),
      chapterTitle: chapter.title,
    };
  };

// TODO: here the domain is coupled to VTT format. Should I make the conversion in the API ?
export const convertVttInputToCues = ({parseVttInput}: Dependencies) => (
  input: string,
  chapters?: Chapter[],
): Cue[] => {
  const cues = parseVttInput(input);

  const cleanCues = cues.map(cue => ({...cue, text: cue.text.replace(/\n/g, " ")}))
  if (!chapters) {
    return [{ start: 0, text: cleanCues.map(cue => cue.text).join(" ").trim()}]
  }

  return compact(
      chapters.map((chapter) =>
      mergeCuesInsideAChapter(chapter)(cleanCues)
    )
  );
};
