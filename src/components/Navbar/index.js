import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white p-2">
      <h1 className="py-2 ml-3 mb-0" id="my-name">Deleon Xavier Francis</h1>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav link-text-size">
            <li className="nav-item active">
                <a className="nav-link" href="/resume">Resume</a>
            </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;