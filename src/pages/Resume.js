import React from "react";
import HamburgerBtn from "../components/HamburgerBtn" 
import FadeIn from "../components/FadeIn";
import LinkButtons from "../components/LinkButtons"
import francis_resume from "../files/resume/francis_resume.pdf"

function Resume({isLargerThanIPad, isSmallerThanIPad}) {
  return (
    <FadeIn>
      <section id="resume-section" className="flex-fill p-3 py-5 bg-light shadow-lg">
          <h1 className="rale-text pt-3 mb-0">Resume</h1>
          <hr />
          {isLargerThanIPad && <LinkButtons about="px-2 text-link" portfolio="px-2 text-link" resume="px-2 text-link-active" />}
        {isSmallerThanIPad && <HamburgerBtn />}
          <div className="col-md-12 text-center">
              <a href={francis_resume} download="Francis_resume.pdf">
                <i className="fas fa-cloud-download-alt fa-3x text-secondary"></i>
              </a>
              <br />
              <a className="resume-download" href={francis_resume} download="Francis_resume.pdf">
                Click to download
              </a>
            </div>
      </section>
    </FadeIn>
  );
}

export default Resume;
