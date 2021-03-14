import React from "react";
import Project from "../components/Project";
import mood_1 from "../images/gifs/mood_1.gif";
import weatherdash1 from "../images/gifs/weatherdash1.gif";
import dayGif from "../images/gifs/dayGif.gif";
import burgers from "../images/gifs/burgers.gif";
import ed_screenshot from "../images/screenshots/ed_screenshot.png";
import donde_login from "../images/screenshots/donde_login.png"

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
              name='Dondé'
              src={donde_login}
              repo="https://github.com/jmasone15/travel-planner-project"
              website="https://shielded-woodland-30004.herokuapp.com/"
            />

            {/* Project 2 */}
            <Project
              name="Weather Dashboard"
              src={weatherdash1}
              repo="https://github.com/deleonfrancis/Weather_Dashboard"
              website="https://deleonfrancis.github.io/Weather_Dashboard/"
            />
          </div>

          <div className="row center-this d-flex justify-content-between">
            {/* Project 3 */}
            <Project
              name="Work Day Scheduler"
              src={dayGif}
              repo="https://github.com/deleonfrancis/Work_Day_Scheduler"
              website="https://deleonfrancis.github.io/Work_Day_Scheduler/"
            />

            {/* Project 4 */}
            <Project
              name="Burger Logger"
              src={burgers}
              repo="https://github.com/deleonfrancis/Burgers_logger"
              website="https://evening-river-12924.herokuapp.com/"
            />
          </div>

          <div className="row center-this d-flex justify-content-between">
            {/* Project 5 */}
            <Project
              name="Employee Directory"
              src={ed_screenshot}
              repo="https://github.com/deleonfrancis/Employee_Directory"
              website="https://deleonfrancis.github.io/Employee_Directory/"
            />
            {/* Project 6 */}
            <Project
              name='Group Project "Mood"'
              src={mood_1}
              repo="https://github.com/Bokosyk/Mood"
              website="https://bokosyk.github.io/Mood/"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
