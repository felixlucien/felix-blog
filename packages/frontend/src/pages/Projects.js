import { motion } from "framer-motion";

import shareshopLists from "../assets/shareshop-lists.webp";
import shareshopLogin from "../assets/shareshop-login.webp";
import shareshopQuickstart from "../assets/shareshop-quickstart.webp";
import shareshopSettings from "../assets/shareshop-settings.webp";

import autocompleteSimple from "../assets/autocomplete-simple.png";
import autocompleteComplex from "../assets/autocomplete-complex.png";

import { Toolbar } from "../components/Toolbar";

const CARD_STYLE = "w-full md:w-4/5 p-2 bg-white mt-2";

export const ProjectsPage = () => {
  return (
    <div className="w-screen h-screen bg-slate-400 flex flex-col items-center">
      <Toolbar />
      <div className={CARD_STYLE}>
        <div className="mx-2">
          <h1 className="text-2xl">My projects.</h1>
          <h1>Here's a list of things I've worked on and made.</h1>
        </div>
      </div>
      <div className={CARD_STYLE}>
        <div className="mx-2">
          <div className="flex flex-row">
            <h1 className="text-2xl">ShareShop App</h1>

            <h1 className="ml-auto">2018 (early high school)</h1>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-80">
              <h1 className="font-bold">The issue</h1>
              <h1>
                Having to ask people to get things from the shops is a pain in
                the ass. Sometimes they forget, get the wrong thing or you
                forget to ask them before they leave / when they're there.
              </h1>
              <h1 className="font-bold">The solution</h1>
              <h1>
                An app where you create a family, add all members and create
                shopping lists which automatically synchronize between them.
                Everyone adds stuff in their own time and the next time someone
                goes, they just grab all the things on the list.
              </h1>
            </div>
            <div className="md:ml-auto mt-2 md:mt-0">
              <div className="flex flex-col md:flex-row gap-4">
                <img className="w-44" src={shareshopLogin} />
                <img className="w-44" src={shareshopQuickstart} />
                <img className="w-44" src={shareshopLists} />
                <img className="w-44" src={shareshopSettings} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={CARD_STYLE}>
        <div className="mx-2">
          <div className="flex flex-row">
            <h1 className="text-2xl">Flutter Autocomplete Textfield</h1>
            <h1 className="ml-auto">2018-present</h1>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <h1 className="font-bold">The issue</h1>
              <h1>
                At the time, the cross-platform development framework Flutter
                hadn't yet gone mainstream, there didn't yet exist an
                autocomplete textfield ui component and I desperately needed one
                for the aforementioned ShareShop app.
              </h1>
              <h1 className="font-bold">The solution</h1>
              <h1>
                A brand new - shiny autocomplete textfield ui component, open
                sourced too... How good is that!
              </h1>
            </div>
            <div className="md:ml-auto flex flex-col md:flex-row gap-4 mt-2 items-center">
              <img className="w-44" src={autocompleteSimple} />
              <img className="w-44" src={autocompleteComplex} />
            </div>
          </div>
        </div>
      </div>
      <div className={`${CARD_STYLE} mb-2`}>
        <div className="mx-2">
          <div className="flex flex-row">
            <h1 className="text-2xl">ESP 8266 Router</h1>
            <h1 className="ml-auto">2019</h1>
          </div>
          <div className="flex flex-row">
            <div>
              <h1 className="font-bold">The issue</h1>
              <h1>
                The esp 8266 is great and processing wireless traffic, but has
                no ethernet interface.
              </h1>
              <h1 className="font-bold">The solution</h1>
              <h1>
                I connected an ethernet interface (enc28j60) via the SPI gpio
                pins, allowing the ESP 8266 to act as a bridge from wired medium
                to wireless, nice! I had to mess around with the LWIP stack and
                implemented a cool command prompt so you could issue router
                commands, for example:
              </h1>
              <div className="flex flex-col gap-2 mt-2">
                <code className="bg-black text-white">show netif all</code>
                <code className="bg-black text-white">show ip route</code>
                <code className="bg-black text-white">show interface en</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
