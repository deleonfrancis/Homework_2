import React from 'react'
import resume_mar16_2021 from "../files/resume/resume_mar16_2021.pdf"

function Resume() {
    return (
        <section class="flex-fill container p-3 py-5 mt-1">
      <div class="bg-white center col-lg-4 col-md-6 col-sm-12 shadow-lg">
        <h1 class="text-green pt-3 mb-0">
            Resume
        </h1>
        <hr />

        <div class="row pb-3">
            <div class="col-md-12 text-center">
             <a href={resume_mar16_2021} download="Francis_resume.pdf"><i class="fas fa-cloud-download-alt fa-3x text-dark"></i></a>
             <br />
             <a href={resume_mar16_2021} download="Francis_resume.pdf">Click to download</a>   
            </div>
        </div>
    </div>
    </section>
    )
}

export default Resume
