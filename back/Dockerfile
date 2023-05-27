# https://dev.to/andreafalzetti/combining-nodejs-and-python-in-a-single-aws-lambda-function-53bl
FROM public.ecr.aws/lambda/nodejs:18

RUN yum install -y python3 && \
    pip3 install --upgrade pip requests && \
    pip3 install yt-dlp

COPY . .

CMD ["build/convertYoutubeVideoToMarkdownFile.handler"]