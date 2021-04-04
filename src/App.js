import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./css/styles.css";
import Wrapper from "./components/Wrapper";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router >
      <div className="App1">
        <Wrapper>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/resume" component={Resume} />
          </Switch>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
