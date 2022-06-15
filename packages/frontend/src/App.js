import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Pages } from "./Pages";

import ReactGA from "react-ga4";

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
ReactGA.send({ hitType: "pageview", page: "landing" });

function App() {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
}

export default App;
