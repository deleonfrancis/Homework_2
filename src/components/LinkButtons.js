import React from "react";
import { Link } from "react-router-dom";

function LinkButtons() {
  return (
    <div id="link-btns-div" className="">

      {/* Home Link */}
      <Link to="/" className={window.location.pathname === "/" ? "px-2 " : "px-2"}>
        Home
      </Link>

      {/* About Link */}
      <Link
        to="/about"
        className={window.location.pathname === "/about" ? "px-2 text-red" : "px-2"}
      >
        About
      </Link>

      {/* Portfolio Link */}
      <Link
        to="/portfolio"
        className={window.location.pathname === "/portfolio" ? "px-2 text-red" : "px-2"}
      >
        Portfolio
      </Link>

      {/* Resume Link */}
      <Link
        to="/resume"
        className={window.location.pathname === "/resume" ? "px-2 text-red" : "px-2"}
      >
        Resume
      </Link>
    </div>
  );
}

export default LinkButtons;
