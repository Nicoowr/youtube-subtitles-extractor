import { Serverless } from "serverless/aws";

const serverlessConfig: Serverless = {
    service: "youtube-subtitles-extractor",
    frameworkVersion: ">=3.22.0",
    useDotenv: true,
    plugins: [],
    custom: {},
    provider: {
        // @ts-ignore
        ecr: {
            images: {
                "node18-python3-yt-dlp": {
                    path: "./"
                }
            }
        },
        profile: "nicoowr",
        name: "aws",
        region: "eu-west-3",
        architecture: "arm64",
        logRetentionInDays: 14,
    },
    functions: {
        extractSubtitles: {
            // @ts-ignore
            image: {
                name: "node18-python3-yt-dlp",
                command: ["build/convertYoutubeVideoToMarkdownFile.handler"],
                entryPoint: ['/lambda-entrypoint.sh'  ]
            },
            timeout: 30,
        },
    },
};

module.exports = serverlessConfig;
