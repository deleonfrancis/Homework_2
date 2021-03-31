import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import HorizontalBarChart from "../components/HorizontalBarChart";
import xavier_picture from "../images/my_picture/xavier_picture.jpeg";

function About() {
  return (
    <Fragment>
      <Navbar />

      <section id="about-section" className="flex-fill p-3 py-5 bg-light">
        <h1 className="mb-0">About</h1>
        <hr />
        <div className="row">
          <div className="col-lg-5">
            <div className="">
              <img
                className="rounded-circle"
                src={xavier_picture}
                alt="Photograph of Xavier"
                height={250}
                width={250}
              />
              <h4 className="text-bg  my-3">About Me</h4>
              <div style={{ width: "60%", margin: "auto" }}>
                <p>
                  I'm a diligent and self-motivated Full Stack Developer based
                  in Orlando, Florida.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <HorizontalBarChart />
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default About;
