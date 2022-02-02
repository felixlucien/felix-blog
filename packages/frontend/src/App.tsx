import "./App.css";
import { Sidebar } from "./sidebar/Sidebar";
import { BlogPosts } from "./blog/BlogPosts";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Cv } from "./cv/Cv";

const App = () => {
  return (
    <div className="landing-page">
      <BrowserRouter>
        <Sidebar />
        <MeHeader />
        <Switch>
          <Route path="/blog" children={<BlogPosts />} />
          <Route path="/cv" children={<Cv />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
const MeHeader = () => {
  return (
    <div className="me-header">
      <h1>Felix McCuaig - Full Stack Developer</h1>
    </div>
  );
};

export default App;
