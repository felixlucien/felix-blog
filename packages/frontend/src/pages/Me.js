import professionalPic from "../assets/felix-professional.jpeg";

import { Toolbar } from "../components/Toolbar";

import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export const MePage = () => {
  return (
    <div className="w-screen md:h-screen bg-slate-400 flex flex-col items-center">
      <Toolbar />
      <div className="w-4/5 flex flex-col md:grid md:grid-cols-3 gap-4 mt-8">
        <MeCard />
        <ShpeilCard />
        <InterestsCard />
        <ContactCard />
      </div>
    </div>
  );
};

const MeCard = () => {
  return (
    <div className="flex flex-col items-center bg-slate-500 p-2 shadow-lg text-white">
      <h1 className="text-2xl">Me</h1>
      <hr className="border-2 my-2 w-full" />
      <img src={professionalPic} className="w-64 h-64 mb-2 rounded-lg" />
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
        employed as the tech lead at <a href="https://evup.com.au">EVUp</a>,
        creating next generation energy technologies. Think decentralized grid,
        EV charging, EV Fleets, cool stuff.
      </h1>
    </div>
  );
};

const ShpeilCard = () => {
  return (
    <div className="flex flex-col items-center bg-slate-500 p-2 shadow-lg text-white">
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
    <div className="flex flex-col items-center bg-slate-500 p-2 shadow-lg text-white">
      <h1 className="text-2xl">Interests</h1>
      <hr className="border-2 my-2 w-full" />
      <h1 className="mx-1 text-center">
        I like making stuff, sometimes useful, sometimes not, always
        interesting. See <a href="projects">projects</a>.
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
    <div>
      <div className="flex flex-row gap-2">
        <div className="rounded bg-red-600 flex flex-row items-center pl-2 text-white">
          <FaEnvelope />
          <h1 className="font-bold p-2">felixmccuaig@gmail.com</h1>
        </div>
        <div className="flex flex-row rounded linkedin-blue p-2 items-center text-white">
          <FaLinkedin />
          <a
            className="text-white font-bold ml-2"
            href="https://www.linkedin.com/in/felix-mccuaig-812842210/"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};
