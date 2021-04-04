import React from "react";
import LinkButtons from "../components/LinkButtons"
import Project from "../components/Project";
import donde_login from "../images/screenshots/donde_login.png";
import weatherdash1 from "../images/screenshots/weatherdash1.png";
import dayGif from "../images/screenshots/dayGif.png";
import burgers from "../images/screenshots/burgers.png";
import ed_screenshot from "../images/screenshots/ed_screenshot.png";
import mood_1 from "../images/gifs/mood_1.gif";
import FadeIn from "../components/FadeIn";

function Portfolio() {
  return (
    <FadeIn>
      <section id="portfolio-section" className="p-3 py-5 bg-light shadow-lg">
        <h1 className="pt-3 rale-text mb-0">Portfolio</h1>
        <hr />
        <LinkButtons />
            <div className="row center-this d-flex justify-content-center">
              {/* Project 1 */}
              <Project
                name="Dondé"
                detail="A full-stack MERN travel planner application"
                src={donde_login}
                repo="https://github.com/jmasone15/travel-planner-project"
                website="https://dondetravel.herokuapp.com/"
              />
              {/* Project 2 */}
              <Project
                name="Weather Dashboard"
                detail="A current and 5-day weather application"
                src={weatherdash1}
                repo="https://github.com/deleonfrancis/Weather_Dashboard"
                website="https://deleonfrancis.github.io/Weather_Dashboard/"
              />

              {/* Project 3 */}
              <Project
                name="Work Day Scheduler"
                src={dayGif}
                detail="A time sensitive to do list application"
                repo="https://github.com/deleonfrancis/Work_Day_Scheduler"
                website="https://deleonfrancis.github.io/Work_Day_Scheduler/"
              />
            </div>
            <div className="row center-this d-flex justify-content-center m-1">
              {/* Project 4 */}
              <Project
                name="Burger Logger"
                detail="Log the burger they've eaten and want to eat"
                src={burgers}
                repo="https://github.com/deleonfrancis/Burgers_logger"
                website="https://evening-river-12924.herokuapp.com/"
              />
               {/* Project 5 */}
              <Project
                name="Employee Directory"
                detail="View filter a employee director"
                src={ed_screenshot}
                repo="https://github.com/deleonfrancis/Employee_Directory"
                website="https://deleonfrancis.github.io/Employee_Directory/"
              />
              {/* Project 6 */}
              <Project
                name='Group Project "Mood"'
                detail="This application returns a YouTube music playlist based on your mood"
                src={mood_1}
                repo="https://github.com/Bokosyk/Mood"
                website="https://bokosyk.github.io/Mood/"
              />
            </div>
      </section>
    </FadeIn>
  );
}

export default Portfolio;
