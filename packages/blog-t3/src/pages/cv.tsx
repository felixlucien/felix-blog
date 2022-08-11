import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CV</title>
        <meta
          name="keywords"
          content="Felix McCuaig, Software Developer, nextjs, Blog, EV, EV charging, EV charging software"
        />
        <meta name="author" content="Felix McCuaig" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="My CV." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <object
        data="/cv.pdf"
        type="application/pdf"
        className="h-screen w-screen"
      />
    </>
  );
};

export default Home;
