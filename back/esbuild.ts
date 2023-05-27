import { build } from "esbuild";

const buildFederated = async () => {
    await build({
        bundle: true,
        entryPoints: [
            "./src/api/convertYoutubeVideoToMarkdownFile.ts",
        ],
        external: [],
        format: "cjs",
        minify: true,
        minifyIdentifiers: false,
        outdir: "./build",
        platform: "node",
        plugins: [],
        target: "node18",
    });
};

buildFederated().then(() =>
    console.log("Succesfully built lambda")
);
