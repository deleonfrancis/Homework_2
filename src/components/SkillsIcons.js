import React from "react";

function SkillsIcons() {
  return (
    <>
      <div>
      <h2 className='text-bg about-label'>Skills</h2>
        <i className="fab fa-2x fa-js text-warning mx-2"></i>
        <i className="fab fa-2x fa-react text-primary mx-2"></i>
        <i className="fab fa-2x fa-node text-success mx-2"></i>
        <i className="fab fa-2x fa-html5 text-danger mx-2"></i>
        <i className="fab fa-2x fa-css3-alt text-primary mx-2"></i>
        <i className="fab fa-2x fa-bootstrap text-purple mx-2"></i>
      </div>
      <div className="mt-3">
        <p className="skills-no-icon">MongoDB, MySQL, Express, jQuery</p>
      </div>
    </>
  );
}

export default SkillsIcons;