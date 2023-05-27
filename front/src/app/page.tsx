"use client"
// TODO: will be completely cleaned soon
import React, { useState } from "react";
import { Button, Input, Switch } from "antd";

export default function Home() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [url, setUrl] = useState("");
  const [markdown, setMarkdown] = useState("");

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

    const handleExtractClick = async () => {
        try {
            // Call your API endpoint with the URL
            const response = await fetch("/api/extract", {
                method: "POST",
                body: JSON.stringify({ url }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("API request failed");
            }

            // Extracted markdown content
            const data = await response.json();
            const extractedMarkdown = data.subtitles;

            // Update the state with extracted markdown
            setMarkdown(extractedMarkdown);
        } catch (error) {
            console.error("Error:", error);
            // Handle error state or display an error message
        }
    };


    return (
        <div className={`container ${darkTheme ? "dark" : "light"}`}>
            <div className="header">
                <h1 className="title">Extract subtitles from any Youtube video</h1>
                <Switch className="theme-toggle" onChange={toggleTheme} />
            </div>
            <div className="center-container">
                <Input
                    className="url-input"
                    value={url}
                    onChange={handleUrlChange}
                    placeholder="Enter URL"
                />
                <Button className="extract-button" onClick={handleExtractClick}>
                    Extract
                </Button>
                <Input.TextArea className="markdown-area" value={markdown} readOnly />
            </div>
        </div>
    );
}
