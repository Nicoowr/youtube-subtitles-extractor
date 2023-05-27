import {promises} from "fs"
export const saveMarkdownFile = async (markdownString: string) => {
    await promises.writeFile("scripts/output/formattedSubtitles.md", markdownString);
}