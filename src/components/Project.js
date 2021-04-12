import React, { useState } from "react";
import FadeIn from "./FadeIn";
import ProjectDetails from "./ProjectDetails";
import ProjectDetailsSm from "./ProjectDetailsSm";

function Project({
  name,
  detail,
  src,
  repo,
  website,
  isLargerThanIPad,
  isSmallerThanIPad,
}) {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {isLargerThanIPad && (
        <div
          style={{
            width: "400px",
            height: "205px",
            margin: "10px",
            position: "relative",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="imgDiv"
          tabIndex={0}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
        >
          {!isHovered && (
            <div style={{ position: "absolute" }}>
              <img
                src={src}
                alt={`${name} pic`}
                className="image-fluid port-image project-image"
              />
              <div className="d-flex justify-content-end">
                <i className="fas fa-info-circle port-icon text-dark"></i>
              </div>
            </div>
          )}
          {isHovered && (
            <FadeIn>
              <div
              >
                <h3 className="project-title">{name}</h3>
                <p className="project-detail">{detail}</p>
                <ProjectDetails repo={repo} website={website} />
              </div>
            </FadeIn>
          )}
        </div>
      )}
      {isSmallerThanIPad && (
        <FadeIn>
          <div className="row mb-3">
            <div className="col-12">
              <div>
                <img
                  src={src}
                  alt={`${name} pic`}
                  className="image-fluid port-image project-image"
                />
              </div>
            </div>
            <ProjectDetailsSm
              name={name}
              detail={detail}
              repo={repo}
              website={website}
            />
          </div>
        </FadeIn>
      )}
    </>
  );
}

export default Project;