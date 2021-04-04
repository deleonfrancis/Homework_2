import React from 'react'
import { Link } from 'react-router-dom'

function HamburgerBtn() {
    return (
        <>
            <div className="navbar-light purple lighten-4 mb-4">
            {/* <!-- Collapse button --> */}
            <button className="navbar-toggler toggler-example purple darken-3" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent41" aria-controls="navbarSupportedContent41" aria-expanded="false"
                aria-label="Toggle navigation"><span className="white-text"><i className="fas fa-bars fa-1x"></i></span></button>

            {/* <!-- Collapsible content --> */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent41">

                {/* <!-- Links --> */}
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/portfolio">Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/resume">Resume</Link>
                </li>
                </ul>
            </div>
            </div>
        </>
    )
}

export default HamburgerBtn
