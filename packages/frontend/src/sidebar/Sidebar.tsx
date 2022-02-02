import { Link } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = ({}) => {
  return (
    <div className="sidebar">
      <Link className="link" to="blog">
        Blog
      </Link>
      <Link className="link" to="cv">
        CV
      </Link>
      <Link className="link" to="about-me">
        About Me
      </Link>
    </div>
  );
};
