import professionalPic from "../assets/felix-professional.jpeg";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const LandingPage = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-screen h-screen bg-slate-400 flex flex-col items-center justify-center">
        <h1 className="text-white text-2xl md:text-4xl mb-4 text-center">
          Felix McCuaig - Full stack software engineer.
        </h1>
        <img
          src={professionalPic}
          className="w-64 h-64 rounded-lg mb-8 shadow-lg"
        />
        <div className="flex flex-row">
          <Link
            className="text-center rounded p-2 m-2 w-16 md:w-32 bg-slate-500 text-white"
            to="/me"
          >
            Me
          </Link>
          <Link
            className="text-center rounded p-2 m-2 w-24 md:w-32 bg-slate-500 text-white"
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className="text-center rounded p-2 m-2 w-16 md:w-32 bg-slate-500 text-white"
            to="/cv"
          >
            CV
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
