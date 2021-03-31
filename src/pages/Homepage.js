import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <section id="welcome" className="bg-light shadow-lg">
      <div className="welcome-text">
        Hello, I'm <span className="welcome-name">Deleon Xavier Francis</span>.
        <br /> I'm a full-stack web developer.
      </div>

      <Link to="/about" className="learnBtn">
        LEARN MORE
      </Link>
    </section>
  );
}

export default Homepage;
