import React from "react";

function Project(props) {
  return (
    <div className="col-lg-5 col-md-12 col-sm-12 img-port text-center bg-light shadow-lg">
      <p className="m-2 img-title text-white">{props.name}</p>
      <img
        src={props.src}
        alt={`${props.name} pic`}
        className="image-fluid port-image"
      />
      <a href={props.repo} className="portfolio-a">
        Repository
      </a>
      <a href={props.website} className="portfolio-a px-3">
        Website
      </a>
    </div>
  );
}

export default Project;
