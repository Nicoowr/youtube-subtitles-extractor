type Props = {
  subtitles: string | null;
};

export const Subtitles = ({ subtitles }: Props) => {
  return subtitles ? <>{subtitles}</> : null;
};
