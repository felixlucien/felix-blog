import professionalPic from "../assets/felix-professional.jpeg";

import { Toolbar } from "../components/Toolbar";

export const MePage = () => {
  return (
    <div className="w-screen md:h-screen bg-slate-400 flex flex-col items-center">
      <Toolbar />
      <div className="w-4/5 p-2 bg-white my-2">
        <div className="flex flex-col md:flex-row">
          <img src={professionalPic} className="w-64 h-64" />
          <div className="mx-2">
            <h1 className="text-2xl">
              Felix McCuaig - Full stack software engineer.
            </h1>
            <p>Hi, I'm Felix and I'm passionate about developing software.</p>
            <p>
              I believe a bright and prosperous future can be created for
              humanity through the development of technology for good. My dream
              is of a future where toil and repetitive tasks are a thing of the
              past, where humans can focus on doing meaningful stuff and let the
              machines do things that are boring, repetitive or dangerous.
            </p>
            <p className="mt-2">
              The development of software offers a unique oppurtunity to
              automate such tasks and from a young age, I've been infatuated
              with the creation of systems which do just that.
            </p>
            <p className="mt-2">
              To me, there's no better feeling than pushing code that saves
              people time and makes our world ever more productive and efficient
              than ever, leaving us with more time to do the things that really
              matter.
            </p>
          </div>
        </div>
        <h1 className="font-bold">What am i up to?</h1>
        <h1 className="mx-1">
          I'm currently studying maths at the University Of Melbourne, and
          employed as the tech lead at{" "}
          <a className="font-bold" href="https://evup.com.au">
            EVUp
          </a>
          , creating an EV charging software platform which aims to make the
          global transition to EVs, clean energy and a decarbonised world
          simple.
        </h1>
        <h1 className="font-bold">Interests</h1>
        <h1 className="mx-1">
          I like making stuff, sometimes useful, sometimes not, always
          interesting. See{" "}
          <a className="font-bold" href="projects">
            projects
          </a>
          .
        </h1>
        <h1 className="mx-1">
          I'm also interested in how the world works, how we live within it and
          how we can improve our quality of life through the development of
          technology.
        </h1>
        <h1 className="font-bold">Contact</h1>
        <div className="flex flex-row">
          <h1 className="border rounded bg-gray-300 text-black font-bold p-2">
            felixmccuaig@gmail.com
          </h1>
          <a
            className="border rounded linkedin-blue text-white p-2 font-bold ml-2"
            href="https://www.linkedin.com/in/felix-mccuaig-812842210/"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};
