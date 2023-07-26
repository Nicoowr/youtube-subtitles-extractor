import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { fetchSubtitles } from "../../services/youtube-subtitles-extractor/api/fetchSubtitles";
import { fetchAvailableSubtitlesLanguages } from "../../services/youtube-subtitles-extractor/api/fetchAvailableSubtitlesLanguages";

export const router = createTRPCRouter({
  "fetch-subtitles": publicProcedure
    .input(z.object({ youtubeUrl: z.string(), language: z.string() }))
    .mutation(async ({ input }) => {
      console.log("INPUT: ", input.language);
      const result = await fetchSubtitles({
        youtubeUrl: input.youtubeUrl,
        language: input.language,
      });
      return {
        subtitles: result,
      };
    }),
  "available-subtitles-languages": publicProcedure
    .input(z.object({ youtubeUrl: z.string() }))
    .mutation(async ({ input }) => {
      console.log("INPUT: ", input.youtubeUrl);
      const result = await fetchAvailableSubtitlesLanguages({
        youtubeUrl: input.youtubeUrl,
      });
      return {
        availableSubtitlesLanguages: result,
      };
    }),
});
