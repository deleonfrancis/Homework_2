import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import resume_mar16_2021 from "../files/resume/resume_mar16_2021.pdf";

function Resume() {
  return (
    <Fragment>
      <Navbar />
      <section id="resume-section" class="flex-fill p-3 py-5 bg-light shadow-lg">
          <h1 class="pt-3 mb-0">Resume</h1>
          <hr />
          <div class="col-md-12 text-center">
              <a href={resume_mar16_2021} download="Francis_resume.pdf">
                <i class="fas fa-cloud-download-alt fa-3x text-dark"></i>
              </a>
              <br />
              <a href={resume_mar16_2021} download="Francis_resume.pdf">
                Click to download
              </a>
            </div>
      </section>
    </Fragment>
  );
}

export default Resume;
