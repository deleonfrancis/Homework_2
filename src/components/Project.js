import React, { useState } from "react";

function Project(props) {
  const [isShown, setIsShown] = useState(false);
  const img = props.src;
  return (
      <div
        style={{ width: "400px", height: "205px", margin: "10px"}}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        className=""
      >
        {!isShown && (
          <img
            src={props.src}
            alt={`${props.name} pic`}
            className="image-fluid port-image"
            style={{width:"100%"}}
          />
        )}
        {isShown && (
          <div className="">
          <h3 className="project-title">{props.name}</h3>
          <p className="project-detail">{props.detail}</p>
            <div className="btn-block" style={{width:"75%", margin: "0 auto 5px"}}>
              <a href={props.repo} target="_blank" rel="noreferrer" className="to-site-btn btn-block text-bg">
                Repository
              </a>
              </div>
            <div className="btn-block" style={{width:"75%", margin: "0 auto 5px"}}>
              <a href={props.website} target="_blank" rel="noreferrer" className="to-site-btn btn-block text-bg">
                Website
              </a>
            </div>
          </div>
        )}
      </div>
  );
}

export default Project;
