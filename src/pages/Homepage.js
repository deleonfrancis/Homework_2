import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "../components/FadeIn";

function Homepage() {
  return (
    <FadeIn>
      <section id="welcome" className="bg-light shadow-lg">
        <div className="welcome-text">
          Hello, I'm <span className="welcome-name">Deleon Xavier Francis</span>
          .
          <br /> I'm a full-stack web developer.
        </div>
        <FadeIn delay={700} duration={500}>
          <Link to="/about" className="learnBtn">
            LEARN MORE
          </Link>
        </FadeIn>
      </section>
    </FadeIn>
  );
}

export default Homepage;
