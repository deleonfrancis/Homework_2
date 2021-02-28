import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white p-2">
      <h1 class="py-2 ml-3 mb-0" id="my-name">Deleon Xavier Francis</h1>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav link-text-size">
            <li class="nav-item active">
                <a class="nav-link" href="./resume.html">Resume</a>
            </li>
          <li class="nav-item">
            <a class="nav-link" href="./contact.html">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./portfolio.html">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../index.html">About</a>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;