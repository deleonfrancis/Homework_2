import React from "react";
import { Link } from "react-router-dom";

function LinkButtons() {
  return (
    <div id="link-btns-div" className="">

      {/* Home Link */}
      <Link to="/" className={window.location.pathname === "/" ? "px-2 text-link " : "px-2"}>
        Home
      </Link>

      {/* About Link */}
      <Link
        to="/about"
        className={window.location.pathname === "/about" ? "px-2 text-link" : "px-2 text-link"}
      >
        About
      </Link>

      {/* Portfolio Link */}
      <Link
        to="/portfolio"
        className={window.location.pathname === "/portfolio" ? "px-2 text-link" : "px-2 text-link"}
      >
        Portfolio
      </Link>

      {/* Resume Link */}
      <Link
        to="/resume"
        className={window.location.pathname === "/resume" ? "px-2 text-link" : "px-2 text-link"}
      >
        Resume
      </Link>
    </div>
  );
}

export default LinkButtons;
