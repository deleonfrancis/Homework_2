import React from "react";
import { Link } from "react-router-dom";

function LinkButtons({ about, portfolio, resume}) {

  return (
    <div id="link-btns-div" className="">

      {/* Home Link */}
      <Link to="/" 
      // className={window.location.pathname === "/" ? "px-2 text-link " : "px-2"}
      className="px-2 text-link"
      >
        Home
      </Link>

      {/* About Link */}
      <Link
        to="/about"
      className={about}
      >
        About
      </Link>

      {/* Portfolio Link */}
      <Link
        to="/portfolio"
        className={portfolio}
      >
        Portfolio
      </Link>

      {/* Resume Link */}
      <Link
        to="/resume"
        className={resume}
      >
        Resume
      </Link>
    </div>
  );
}

export default LinkButtons;