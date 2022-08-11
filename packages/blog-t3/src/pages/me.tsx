import { Toolbar } from "../components/Toolbar";

import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta
          name="keywords"
          content="Felix McCuaig, Software Developer, nextjs, Blog, EV, EV charging, EV charging software"
        />
        <meta name="author" content="Felix McCuaig" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Felix McCuaig's passion projects." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen min-h-screen bg-slate-400 flex flex-col items-center">
        <Toolbar />
        <h1 className="text-3xl my-4 text-white bg-slate-500 px-8 py-2 rounded-lg">
          About me.
        </h1>
        <div className="w-4/5 flex flex-col md:grid md:grid-cols-3 gap-4 mt-8">
          <MeCard />
          <ShpeilCard />
          <InterestsCard />
        </div>
        <ContactCard />
      </div>
    </>
  );
};

const MeCard = () => {
  return (
    <div className="flex flex-col items-center bg-slate-500 p-2 shadow-lg text-white rounded">
      <h1 className="text-2xl">Me</h1>
      <hr className="border-2 my-2 w-full" />
      <img
        src="/felix-professional.jpeg"
        className="w-64 h-64 rounded-lg mb-8 shadow-lg"
      />
      <div className="mx-2">
        <h1 className="text-2xl text-center">
          Felix McCuaig - Full stack software engineer.
        </h1>
        <p className="text-center">
          Hi, I'm Felix and I'm passionate about developing software.
        </p>
      </div>
      <h1 className="font-bold">What am i up to?</h1>
      <h1 className="mx-1 text-center">
        I'm currently studying maths at the University Of Melbourne, and
        employed as the tech lead at{" "}
        <a className="font-bold" href="https://evup.com.au">
          EVUp
        </a>
        , creating next generation energy technologies. Think decentralized
        grid, EV charging, EV Fleets, cool stuff.
      </h1>
    </div>
  );
};

const ShpeilCard = () => {
  return (
    <div className="flex flex-col items-center bg-slate-500 p-2 shadow-lg text-white rounded">
      <h1 className="text-2xl">The Shpeil</h1>
      <hr className="border-2 my-2 w-full" />
      <p className="m-0">
        I believe a bright and prosperous future can be created for humanity
        through the development of technology for good. My dream is of a future
        where toil and repetitive tasks are a thing of the past, where humans
        can focus on doing meaningful stuff and let the machines do things that
        are boring, repetitive or dangerous.
      </p>
      <p className="mt-2">
        The development of software offers a unique oppurtunity to automate such
        tasks and from a young age, I've been infatuated with the creation of
        systems which do just that.
      </p>
      <p className="mt-2">
        To me, there's no better feeling than pushing code that saves people
        time and makes our world ever more productive and efficient than ever,
        leaving us with more time to do the things that really matter.
      </p>
    </div>
  );
};

const InterestsCard = () => {
  return (
    <div className="flex flex-col items-center bg-slate-500 p-2 shadow-lg text-white rounded">
      <h1 className="text-2xl">Interests</h1>
      <hr className="border-2 my-2 w-full" />
      <h1 className="mx-1 text-center">
        I like making stuff, sometimes useful, sometimes not, always
        interesting. See{" "}
        <a className="font-bold" href="projects">
          projects
        </a>
        .
      </h1>
      <h1 className="mx-1 text-center">
        I'm also interested in how the world works, how we live within it and
        how we can improve our quality of life through the development of
        technology.
      </h1>
    </div>
  );
};

const ContactCard = () => {
  return (
    <div className="flex flex-row gap-2 mt-4">
      <div className="rounded bg-red-600 flex flex-row items-center pl-2 text-white">
        <FaEnvelope />
        <h1 className="font-bold p-2">felixmccuaig@gmail.com</h1>
      </div>
      <a
        className="flex flex-row rounded linkedin-blue p-2 items-center text-white font-bold"
        href="https://www.linkedin.com/in/felix-mccuaig-812842210/"
      >
        <FaLinkedin />
        <p className="ml-2">Linkedin</p>
      </a>
    </div>
  );
};

export default Home;
