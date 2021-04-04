import React from "react";
import FadeIn from "../components/FadeIn";
import LinkButtons from "../components/LinkButtons"
import francis_resume from "../files/resume/francis_resume.pdf"

function Resume() {
  return (
    <FadeIn>
      <section id="resume-section" class="flex-fill p-3 py-5 bg-light shadow-lg">
          <h1 class="rale-text pt-3 mb-0">Resume</h1>
          <hr />
          <LinkButtons />
          <div class="col-md-12 text-center">
              <a href={francis_resume} download="Francis_resume.pdf">
                <i class="fas fa-cloud-download-alt fa-3x text-secondary"></i>
              </a>
              <br />
              <a className="text-bg" href={francis_resume} download="Francis_resume.pdf">
                Click to download
              </a>
            </div>
      </section>
    </FadeIn>
  );
}

export default Resume;
