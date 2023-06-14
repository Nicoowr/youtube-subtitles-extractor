export const Input = ({setYoutubeUrl}: { setYoutubeUrl: (url: string) => void }) => {
    return <input type="text"
                  className="w-80 rounded p-4 border-t mr-5 border-b border-l text-gray-800 border-gray-200 bg-white"
                  placeholder="Youtube URL" onChange={(e) => setYoutubeUrl(e.target.value)}/>
}