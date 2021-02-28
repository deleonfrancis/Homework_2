import React from 'react'

function Portfolio() {
    return (
        <section class="p-3 py-5 mt-1">
        <div class="bg-white pb-5 center-this col-lg-8 col-md-12 col-sm-12 col-xs-12">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="font-weight-bold text-green pt-3 mb-0">Portfolio</h1>
              </div>
            </div>
            <hr />

            <div class="row center-this">
              {/* Placeholder 1 */}
              <div
                class="col-lg-4 col-md-12 col-sm-12 img-port text-center bg-light"
              >
              <p class="m-2 img-title text-white">Group Project "Mood"</p>
                <img
                  src="../images/gifs/mood_1.gif"
                  alt="Mood Project"
                  class="image-fluid port-image"
                />
                <a href="https://github.com/Bokosyk/Mood" class="portfolio-a">Repository</a>
                <a
                  href="https://bokosyk.github.io/Mood/"
                  class="portfolio-a px-3">Website</a>
              </div>

              {/* Placeholder 2 */}
              <div
                class="col-lg-4 col-md-12 col-sm-12 img-port text-center bg-light"
              >
              <p class="m-2 img-title text-white">Weather Dashboard</p>
                <img
                  src="../images/gifs/weatherdash1.gif"
                  alt="Weather App"
                  class="image-fluid port-image"
                />
                <a
                  href="https://github.com/deleonfrancis/Weather_Dashboard"
                  class="portfolio-a"
                  >Repository</a>
                <a
                  href="https://deleonfrancis.github.io/Weather_Dashboard/"
                  class="portfolio-a px-3"
                  >Website</a>
              </div>
            </div>

            <div class="row mt-3">
              {/* Placeholder 3 */}
              <div
                class="col-lg-4 col-md-12 col-sm-12 img-port text-center bg-light"
              >
              <p class="m-2 img-title text-white">Work Day Scheduler</p>
                <img
                  src="../images/gifs/DayGif.gif"
                  alt="Daily todo list"
                  class="image-fluid port-image"
                />
                <a
                  href="https://github.com/deleonfrancis/Work_Day_Scheduler"
                  class="portfolio-a"
                  >Repository</a>
                <a
                  href="https://deleonfrancis.github.io/Work_Day_Scheduler/"
                  class="portfolio-a px-3"
                  >Website</a>
              </div>
              {/* Placeholder 4 */}
              <div
                class="col-lg-4 col-md-12 col-sm-12 img-port text-center bg-light"
              >
              <p class="m-2 img-title text-white">Burger Logger</p>
                <img
                  src="../images/gifs/burgers.gif"
                  alt="Burger Logger"
                  class="image-fluid port-image"
                />
                <a
                  href="https://github.com/deleonfrancis/Burgers_logger"
                  class="portfolio-a"
                  >Repository</a>
                <a
                  href="https://evening-river-12924.herokuapp.com/"
                  class="portfolio-a px-3"
                  >Website</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Portfolio
