import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
    query: '(min-width: 768px)'
  })
  const isSmallerThanIPad = useMediaQuery({ query: '(max-width: 767px)' })
  return (
    <Router basename="/My_Portfolio" >
      <div className="App3">
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