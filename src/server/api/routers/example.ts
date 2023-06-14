import {z} from "zod";
import {createTRPCRouter, publicProcedure} from "~/server/api/trpc";
import {
    convertYoutubeVideoToMarkdownFile,
} from "~/server/services/youtube-subtitles-extractor/api/convertYoutubeVideoToMarkdownFile";


export const router = createTRPCRouter({
    "extract-subtitles": publicProcedure
        .input(z.object({youtubeUrl: z.string()}))
        .mutation(async ({input}) => {
            console.log("INPUT: ", input.youtubeUrl)
            const result = await convertYoutubeVideoToMarkdownFile(input.youtubeUrl)
            return {
                subtitles: result,
            };
        }),
});
