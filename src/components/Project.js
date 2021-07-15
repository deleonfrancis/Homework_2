import React, { useState } from "react";
import FadeIn from "./FadeIn";
// import ProjectDetails from "./ProjectDetails";
import ProjectLinks from "./ProjectLinks";
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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      {isLargerThanIPad && (
        <div
          style={
            {
              // width: "100%",
              // height: "auto",
              // margin: "10px",
              // position: "relative",
            }
          }
          onMouseEnter={() => {
            handleMouseEnter();
          }}
          onMouseLeave={() => {
            handleMouseLeave();
          }}
          className="col-lg-6 py-3"
          tabIndex={0}
          onFocus={() => {
            handleMouseEnter();
          }}
          onBlur={() => {
            handleMouseLeave();
          }}
        >
          {!isHovered && (
            <div style={{ position: "" }}>
              <img
                src={src}
                alt={`${name} pic`}
                className="image-fluid"
                style={{
                  width: "100%",
                  // height: "auto",
                  // margin: "10px",
                  // position: "relative",
                }}
              />
              <div className="d-flex justify-content-end">
                <i className="fas fa-info-circle port-icon text-light"></i>
              </div>
            </div>
          )}
          {isHovered && (
            <FadeIn>
              <div>
                <h3 className="project-title">{name}</h3>
                <p className="project-detail">{detail}</p>
                <ProjectLinks repo={repo} website={website} />
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
