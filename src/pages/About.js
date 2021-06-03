import React from "react";
// import HorizontalBarChart from "../components/HorizontalBarChart";
import xavier_picture from "../images/my_picture/xavier_picture.jpeg";
import SocialMedia from "../components/SocialMedia";
import LinkButtons from "../components/LinkButtons";
import FadeIn from "../components/FadeIn";
import HamburgerBtn from "../components/HamburgerBtn";
import SkillsIcons from "../components/SkillsIcons";

function About({ isLargerThanIPad, isSmallerThanIPad }) {
  return (
    <FadeIn>
      <section
        id="about-section"
        className="flex-fill p-3 py-5 bg-light shadow-lg"
      >
        <h1 className="mb-0 rale-text">About</h1>
        <hr />
        {isLargerThanIPad && (
          <LinkButtons
            about="px-2 text-link-active"
            portfolio="px-2 text-link"
            resume="px-2 text-link"
          />
        )}
        {isSmallerThanIPad && <HamburgerBtn />}
        <div className="row">
          <div className="col-lg-6">
            <div className="">
              <img
                className="img-fluid"
                src={xavier_picture}
                alt="Photograph of Xavier"
                style={{ width: "150px", borderRadius: "10px" }}
              />
              <br />
              <h2 className="text-bg mt-3 mb-1 about-label">About Me</h2>
              <hr />
              <div style={{ width: "60%", margin: "auto auto 20px" }}>
                <p className="about-detail mt-3">
                  I'm a passionate, solutions-oriented professional with a proven
                  background in designing and building web applications.
                  Adept in utilizing JavaScript, React, and a wide range of
                  other technologies during application development process.
                </p>
                <SocialMedia />
                <h3 className="text-dark mt-4 email-label">
                  E-mail:{" "}
                  <span style={{ wordWrap: "break-word" }}>
                    {" "}
                    <a
                      href="mailto:dxfrancis.coding@gmail.com"
                      className="text-email"
                    >
                      dxfrancis.coding@gmail.com
                    </a>
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
          <SkillsIcons />
            {/* {isLargerThanIPad && <HorizontalBarChart />}
            {isSmallerThanIPad && <SkillsIcons />} */}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

export default About;
