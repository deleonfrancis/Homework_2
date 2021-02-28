import React from 'react'

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
             <a href="/files/resume/Jan2021_Resume.pdf" download="Francis_resume.pdf"><i class="fas fa-cloud-download-alt fa-3x text-dark"></i></a>
             <br />
             <a href="/files/resume/Jan2021_Resume.pdf" download="Francis_resume.pdf">Click to download</a>   
            </div>
        </div>
    </div>
    </section>
    )
}

export default Resume
