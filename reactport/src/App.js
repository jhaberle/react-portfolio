import { Route, HashRouter as BrowserRouter } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Navbar>
        <div class="container">
          <BrowserRouter>
            <Route exact path="/index" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </BrowserRouter>
        </div>
      </Navbar>
      <About />
      <Footer />
    </div>
  );
};

export default App;
