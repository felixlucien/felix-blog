import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { Toolbar } from "../components/Toolbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Passion Projects</title>
        <meta
          name="keywords"
          content="Felix McCuaig, Software Developer, nextjs, Blog, EV, EV charging, EV charging software"
        />
        <meta name="author" content="Felix McCuaig" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Felix McCuaig's passion projects." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen min-h-screen bg-slate-400 flex flex-col items-center pb-6">
        <Toolbar />
        <h1 className="text-3xl my-4 text-white bg-slate-500 px-8 py-2 rounded-lg">
          My projects.
        </h1>
        <ProjectCard
          name="ShareShop App"
          date="2018 (early high school)"
          the_issue="Having to ask people to get things from the shops is a pain in the ass. Sometimes they forget, get the wrong thing or you forget to ask them before they leave / when they're there."
          the_solution="An app where you create a family, add all members and create shopping lists which automatically synchronize between them. Everyone adds stuff in their own time and the next time someone goes, they just grab all the things on the list."
        >
          <div className="grid grid-flow-col auto-cols-auto pb-4">
            <Image
              src="/shareshop-lists.webp"
              width="400"
              height="600"
              objectFit="contain"
            />
            <Image
              src="/shareshop-login.webp"
              width="400"
              height="600"
              objectFit="contain"
            />
            <Image
              src="/shareshop-quickstart.webp"
              width="400"
              height="600"
              objectFit="contain"
            />
            <Image
              src="/shareshop-settings.webp"
              width="400"
              height="600"
              objectFit="contain"
            />
          </div>
        </ProjectCard>
        <ProjectCard
          name="Flutter Autocomplete Textfield"
          date="2018 - present"
          the_issue="At the time, the cross-platform development framework Flutter hadn't yet gone mainstream, there didn't yet exist an autocomplete textfield ui component and I desperately needed one for the aforementioned ShareShop app."
          the_solution="A brand new - shiny autocomplete textfield ui component, open sourced too... How good is that!"
        >
          <div className="grid grid-flow-col auto-cols-auto pb-4">
            <Image
              src="/autocomplete-simple.png"
              width="400"
              height="600"
              objectFit="contain"
            />
            <Image
              src="/autocomplete-complex.png"
              width="400"
              height="600"
              objectFit="contain"
            />
          </div>
        </ProjectCard>
        <ProjectCard
          name="ESP 8266 Router"
          date="2019"
          the_issue="The esp 8266 is great and processing wireless traffic, but has
                no ethernet interface."
          the_solution="I connected an ethernet interface (enc28j60) via the SPI gpio
                pins, allowing the ESP 8266 to act as a bridge from wired medium
                to wireless, nice! I had to mess around with the LWIP stack and
                implemented a cool command prompt so you could issue router
                commands, for example:"
        >
          <div className="w-full flex flex-col gap-2">
            <code className="bg-black text-white w-full">show netif all</code>
            <code className="bg-black text-white w-full">show ip route</code>
            <code className="bg-black text-white w-full">
              show interface en
            </code>
          </div>
        </ProjectCard>
        <ProjectCard
          name="OCPP 1.6J simulator"
          date="2022"
          the_issue="Developing software using real EV chargers is too slow!"
          the_solution="At EVUp we created and open-sourced a OCPP 1.6J simulator, we
                can now create end to end features for the EV chargers without
                having to plug into an EV. Creating features is fat quicker as
                we can now rapidly iterate, weird issues can also be debugged
                easier as we can create artificial configurations."
        />
      </div>
    </>
  );
};

const ProjectCard = ({
  name,
  date,
  the_issue,
  the_solution,
  children,
}: ProjectCardProps) => {
  return (
    <div className="w-full md:w-4/5 p-2 bg-white mt-2 rounded-xl border-2 border-slate">
      <div className="mx-2">
        <div className="flex flex-row">
          <h1 className="text-2xl">{name}</h1>

          <h1 className="ml-auto">{date}</h1>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <h1 className="font-bold mt-2">The issue</h1>
            <h1>{the_issue}</h1>
            <h1 className="font-bold mt-2">The solution</h1>
            <h1>{the_solution}</h1>
          </div>
          <div className="mt-6 w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

type ProjectCardProps = {
  name: string;
  date: string;
  the_issue: string;
  the_solution: string;
  children?: any;
};

export default Home;
