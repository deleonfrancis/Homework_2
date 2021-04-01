import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
      {/* <h1 className="py-2 ml-3 mb-0" id="my-name">
        Deleon Xavier Francis
      </h1> */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav link-text-size">
        <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/resume"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resume"
              className={
                window.location.pathname === "/resume"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={
                window.location.pathname === "/portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={
                // window.location.pathname === "/" ||
                window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
