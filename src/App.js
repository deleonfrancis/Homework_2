import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./css/portfolio.css";
import "./css/styles.css";
import Wrapper from "./components/Wrapper";
import About from "./pages/About";
// import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/contact" component={Contact} /> */}
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
