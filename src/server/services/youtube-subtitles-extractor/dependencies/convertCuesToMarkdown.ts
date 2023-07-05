import { type Cue } from "../domain/types";
import json2md from "json2md";

const cuesHaveChapters = (
  cues: Cue[]
): cues is Array<Cue & { chapterTitle: string }> =>
  cues.every((cue) => cue.chapterTitle);

const convertChapterTitleToMarkdown = (title: string) => ({ h1: title });
const convertCueTextToMarkdown = (text: string) => ({ p: text });

export const convertCuesToMarkdown = (cues: Cue[]): string => {
  if (cuesHaveChapters(cues)) {
    const formattedCuesForMarkdown = cues.flatMap((cue) => [
      convertChapterTitleToMarkdown(cue.chapterTitle),
      convertCueTextToMarkdown(cue.text),
    ]);
    return json2md(formattedCuesForMarkdown);
  }
  const formattedCuesForMarkdown = cues.map((cue) =>
    convertCueTextToMarkdown(cue.text)
  );
  return json2md(formattedCuesForMarkdown);
};
