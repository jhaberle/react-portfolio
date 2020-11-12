import { Route, HashRouter as BrowserRouter } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";

const App = () => {
  return (
    <div className="container">
      <About />
    </div>
  );
};

export default App;
