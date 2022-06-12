import { Route, Routes } from "react-router";
import { AnimatePresence } from "framer-motion";

import { LandingPage } from "./pages/LandingPage";
import { MePage } from "./pages/Me";
import { ProjectsPage } from "./pages/Projects";
import { Cv } from "./pages/Cv";

export const Pages = () => {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/me" element={<MePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/cv" element={<Cv />} />
      </Routes>
    </AnimatePresence>
  );
};
