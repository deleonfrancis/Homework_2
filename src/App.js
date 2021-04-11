import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import "./css/styles.css";
import Wrapper from "./components/Wrapper";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";

function App() {
  const isLargerThanIPad = useMediaQuery({
    query: '(min-device-width: 768px)'
  })
  const isSmallerThanIPad = useMediaQuery({ query: '(max-device-width: 767px)' })
  return (
    <Router >
      <div className="App">
        <Wrapper>
          <Switch>
            <Route exact path="/" render={(props)=>(<Homepage isLargerThanIPad={isLargerThanIPad} isSmallerThanIPad={isSmallerThanIPad} />)} />
            <Route exact path="/about" render={(props)=>(<About isLargerThanIPad={isLargerThanIPad} isSmallerThanIPad={isSmallerThanIPad} />)} />
            <Route exact path="/portfolio" render={(props)=>(<Portfolio isLargerThanIPad={isLargerThanIPad} isSmallerThanIPad={isSmallerThanIPad} />)} />
            <Route exact path="/resume" render={(props)=>(<Resume isLargerThanIPad={isLargerThanIPad} isSmallerThanIPad={isSmallerThanIPad} />)} />
            <Route component={NotFound} />
          </Switch>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
