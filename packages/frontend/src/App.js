import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Pages } from "./Pages";

import ReactGA from "react-ga";

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);

function App() {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
}

export default App;
