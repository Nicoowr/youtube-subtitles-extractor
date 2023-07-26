import { type NextPage } from "next";
import { Header } from "../components/Header";
import { SubtitlesExtractorContainer } from "../components/SubtitlesExtractorContainer";

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
