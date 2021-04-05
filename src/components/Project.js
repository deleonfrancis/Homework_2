import React, { useState } from "react";
import FadeIn from "./FadeIn";

function Project(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{ width: "400px", height: "205px", margin: "10px", position: "relative" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="imgDiv"
    >
      {!isHovered && (
        <div style={{position: "absolute"}}>
          <img
            src={props.src}
            alt={`${props.name} pic`}
            className="image-fluid port-image project-image"
          />
          <div className="d-flex justify-content-end">
          <i className="fas fa-info-circle port-icon text-dark"></i>
          </div>
          
        </div>
      )}
      {isHovered && (
        <FadeIn>
          <div className="">
            <h3 className="project-title">{props.name}</h3>
            <p className="project-detail">{props.detail}</p>
            <div
              className="btn-block"
              style={{ width: "75%", margin: "0 auto 5px" }}
            >
              <a
                href={props.repo}
                target="_blank"
                rel="noreferrer"
                className="to-site-btn btn-block text-bg"
              >
                Repository
              </a>
            </div>
            <div
              className="btn-block"
              style={{ width: "75%", margin: "0 auto 5px" }}
            >
              <a
                href={props.website}
                target="_blank"
                rel="noreferrer"
                className="to-site-btn btn-block text-bg"
              >
                Website
              </a>
            </div>
          </div>
        </FadeIn>
      )}
    </div>
  );
}

export default Project;
