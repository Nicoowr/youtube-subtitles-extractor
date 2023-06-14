export type Cue = {
  start: number;
  text: string;
  chapterTitle?: string;
};

export type Chapter = {
  start: number;
  end: number;
  title: string;
}