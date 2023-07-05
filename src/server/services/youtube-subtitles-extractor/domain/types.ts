export type Cue = {
  start: number;
  text: string;
  chapterTitle?: string;
};

export type Chapter = {
  start: number;
  end: number;
  title: string;
};

type Language = "en" | "fr" | "cn" | "es" | "it";

export type SubtitleLanguage = `${Language}-${Language}`;
