import React from "react";
import Project from "../components/Project";

function Portfolio() {
  return (
    <section className="p-3 py-5 mt-1">
      <div className="bg-white pb-5 center-this col-lg-8 col-md-12 col-sm-12 col-xs-12 shadow-lg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="font-weight-bold text-green pt-3 mb-0">
                Portfolio
              </h1>
            </div>
          </div>
          <hr />

          <div className="row center-this d-flex justify-content-between">
            {/* Project 1 */}
            <Project
              name='Group Project "Mood"'
              src="/images/gifs/mood_1.gif"
              repo="https://github.com/Bokosyk/Mood"
              website="https://bokosyk.github.io/Mood/"
            />

            {/* Project 2 */}
            <Project
              name="Weather Dashboard"
              src="/images/gifs/weatherdash1.gif"
              repo="https://github.com/deleonfrancis/Weather_Dashboard"
              website="https://deleonfrancis.github.io/Weather_Dashboard/"
            />
          </div>

          <div className="row center-this d-flex justify-content-between">
            {/* Project 3 */}
            <Project
              name="Work Day Scheduler"
              src="/images/gifs/DayGif.gif"
              repo="https://github.com/deleonfrancis/Work_Day_Scheduler"
              website="https://deleonfrancis.github.io/Work_Day_Scheduler/"
            />

            {/* Project 4 */}
            <Project
              name="Burger Logger"
              src="/images/gifs/burgers.gif"
              repo="https://github.com/deleonfrancis/Burgers_logger"
              website="https://evening-river-12924.herokuapp.com/"
            />
          </div>

          <div className="row center-this d-flex justify-content-between">
            {/* Project 5 */}
            <Project
              name="Employee Directory"
              src="/images/screenshots/ED_screenshot.png"
              repo="https://github.com/deleonfrancis/Employee_Directory"
              website="https://deleonfrancis.github.io/Employee_Directory/"
            />

          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
