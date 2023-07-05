import { type NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";
import { SubmitYoutubeUrl } from "~/components/SubmitYoutubeUrl";
import { useState } from "react";
import { Input } from "~/components/Input";
import { Spinner } from "flowbite-react";
import { Header } from "~/components/Header";
import { SubtitlesExtractorContainer } from "~/components/SubtitlesExtractorContainer";
import { AvailableSubtitlesLanguages } from "~/components/AvailableSubtitlesLanguages";

// EXAMPLE:
// https://www.youtube.com/watch?v=3ZcA3KD80iE (EN)
// https://www.youtube.com/watch?v=3wdLZMkNTe4 (FR)

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-red-900 to-black">
        <SubtitlesExtractorContainer />
      </main>
    </>
  );
};

export default Home;
