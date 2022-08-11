import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import styles from "./index.module.css";
import { Toolbar } from "../components/Toolbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Felix McCuaig</title>
        <meta
          name="keywords"
          content="Felix McCuaig, Software Developer, nextjs, Blog, EV, EV charging, EV charging software"
        />
        <meta name="author" content="Felix McCuaig" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Felix McCuaig's personal developer site."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={`w-screen min-h-screen bg-slate-400 flex flex-col items-center ${styles.font}`}
      >
        <div className="w-1/3 flex flex-col items-center">
          <Toolbar />
        </div>
        <h1 className="text-white text-2xl md:text-4xl mb-8 text-center mt-16">
          Felix McCuaig - Full stack software engineer.
        </h1>
        <img
          src="/felix-professional.jpeg"
          className="w-64 h-64 rounded-lg mb-8 shadow-lg"
        />
        <div>
          <h1 className="text-4xl text-white">Recent blog posts</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
