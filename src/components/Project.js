import React, { useState, useCallback, useEffect } from "react";
import FadeIn from "./FadeIn";

function Project({
  name,
  detail,
  src,
  repo,
  website,
  isLargerThanIPad,
  isSmallerThanIPad,
}) {
  // eslint-disable-next-line
  const handleKeyDown = useCallback(
    e => {
      if (e.keyCode === 40) {
        // Down arrow
        e.preventDefault();
        console.log("down key pressed!");
        // setCurrentFocus(currentFocus === size - 1 ? 0 : currentFocus + 1);
      } else if (e.keyCode === 38) {
        // Up arrow
        e.preventDefault();
        console.log("up key pressed!");
        // setCurrentFocus(currentFocus === 0 ? size - 1 : currentFocus - 1);
      }
    },
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [handleKeyDown])

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
          onFocus={()=>setIsHovered(true)}
          onBlur={()=>setIsHovered(false)}
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
              <div >
                <h3 className="project-title">{name}</h3>
                <p className="project-detail">{detail}</p>
                <div
                  className="btn-block"
                  style={{ width: "75%", margin: "0 auto 5px" }}
                >
                  <a
                    href={repo}
                    target="_blank"
                    rel="noreferrer"
                    className="to-site-btn btn-block text-bg"
                    tabIndex={-1}
                    
                  >
                    Repository
                  </a>
                </div>
                <div
                  className="btn-block"
                  style={{ width: "75%", margin: "0 auto 5px" }}
                >
                  <a
                    href={website}
                    target="_blank"
                    rel="noreferrer"
                    className="to-site-btn btn-block text-bg"
                    tabIndex={-1}
                  >
                    Website
                  </a>
                </div>
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
            <div className="col-12">
              <h6 className="project-title pt-1">{name}</h6>
              <p className="project-detail-mobile">{detail}</p>
              <div
                className="btn-block "
                style={{ width: "75%", margin: "0 auto 5px" }}
              >
                <a
                  href={repo}
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
                  href={website}
                  target="_blank"
                  rel="noreferrer"
                  className="to-site-btn btn-block text-bg"
                >
                  Website
                </a>
              </div>
              <hr className="mt-4" style={{width:"100%"}} />
            </div>
          </div>
        </FadeIn>
      )}
    </>
  );
}

export default Project;
