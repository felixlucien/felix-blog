import ReactGA from "react-ga4";

import { Route, Routes } from "react-router";
import { AnimatePresence } from "framer-motion";

import { LandingPage } from "./pages/LandingPage";
import { MePage } from "./pages/Me";
import { ProjectsPage } from "./pages/Projects";
import { Cv } from "./pages/Cv";
import { Blog } from "./pages/Blog";

import { useEffect } from "react";
import { ArticleDetail } from "./blog/ArticleLoader";

export const Pages = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  }, []);

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/me" element={<MePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/blog/:id" element={<ArticleDetail />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </AnimatePresence>
  );
};
