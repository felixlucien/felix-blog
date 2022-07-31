import { Link } from "react-router-dom";

export const Toolbar = () => {
  return (
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
        to="/blog"
      >
        Blog
      </Link>
      <Link
        className="text-center rounded p-2 m-2 w-16 md:w-32 bg-slate-500 text-white"
        to="/cv"
      >
        Cv
      </Link>
    </div>
  );
};
