import {
    convertYoutubeVideoToMarkdownFile
} from "../src/api/convertYoutubeVideoToMarkdownFile";

const main = () => {
    convertYoutubeVideoToMarkdownFile("https://www.youtube.com/watch?v=jH1agWQSPbw", {stepDurationInSeconds: 60})
}

main()