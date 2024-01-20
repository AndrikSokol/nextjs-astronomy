import Head from "next/head";
import { Inter } from "next/font/google";
import { Planetary } from "@/widgets/Planetary";
const inter = Inter({ subsets: ["latin"] });

export const HomePage = () => {
  return (
    <>
      <Head>
        <title> Astronomy Picture of the Day</title>
        <meta
          name="description"
          content="Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Planetary />
      </main>
    </>
  );
};
