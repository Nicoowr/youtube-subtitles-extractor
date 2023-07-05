import { buildDependencies } from "../dependencies/buildDependencies";
import { convertYoutubeVideoToMarkdownFileDomain } from "../domain/convertYoutubeVideoToMarkdownFileDomain";

export const convertYoutubeVideoToMarkdownFile = async (youtubeUrl: string) => {
  const dependencies = buildDependencies();
  return convertYoutubeVideoToMarkdownFileDomain(dependencies)(youtubeUrl);
};

/*

export const handler = async (event: APIGatewayEvent) => {
    console.log("Event: ", event)
    try {
        if (!event.body) {
            throw new Error(`No body in event received: ${JSON.stringify(event)}`)
        }
        const body = JSON.parse(event.body) as {
            payload: { youtubeUrl: string }
        }
        const subtitles = await convertYoutubeVideoToMarkdownFile(body.payload.youtubeUrl);
        return {
            statusCode: 200, // Specify the desired HTTP status code
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000", // seems to be necessary
                "Access-Control-Allow-Headers": "Content-Type,Authorization",
                "Access-Control-Allow-Methods": "GET,POST",
            },
            body: JSON.stringify({message: "Success", data: subtitles}), // Convert the response data to JSON
        };

    } catch (error: any) {
        console.error("Error:", error);
        return  {
            statusCode: 500, // Specify an appropriate error status code
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
                "Access-Control-Allow-Headers": "Content-Type,Authorization",
                "Access-Control-Allow-Methods": "GET,POST",
            },
            body: JSON.stringify({message: "Error", error: error.message}), // Provide an error message in the response body

        };
    }
}*/
