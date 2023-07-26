type Props = {
  subtitles: string | null;
};

export const Subtitles = ({ subtitles }: Props) => {
  return subtitles ? <p className={"text-amber-50"}>{subtitles}</p> : null;
};
