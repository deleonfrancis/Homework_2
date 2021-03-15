import React from 'react'
import mar15_2021_Resume from "../files/resume/mar15_2021_Resume.pdf"

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
             <a href={mar15_2021_Resume} download="Francis_resume.pdf"><i class="fas fa-cloud-download-alt fa-3x text-dark"></i></a>
             <br />
             <a href={mar15_2021_Resume} download="Francis_resume.pdf">Click to download</a>   
            </div>
        </div>
    </div>
    </section>
    )
}

export default Resume
