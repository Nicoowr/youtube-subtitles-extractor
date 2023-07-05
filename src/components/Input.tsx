export const Input = ({
  setYoutubeUrl,
}: {
  setYoutubeUrl: (url: string) => void;
}) => {
  return (
    <input
      type="text"
      className="mr-5 w-80 rounded border-b border-l border-t border-gray-200 bg-white p-4 text-gray-800"
      placeholder="Youtube URL"
      onChange={(e) => setYoutubeUrl(e.target.value)}
    />
  );
};
