import React from "react";
import mongoDbLogo from "../images/logos/mongoDbLogo.png"
import expressLogo from "../images/logos/expressJS.png"
import jQueryLogo from "../images/logos/jQuery.svg"
import reduxLogo from "../images/logos/reduxLogo.png"
import mySQL from "../images/logos/mySQL.png"
import materializeLogo from "../images/logos/materializeLogo.png"

function SkillsIcons() {
  return (
    <>
      <div>
      <h2 className='text-bg about-label'>Technologies</h2>
      <hr />
      <div className="row mt-4">
      <div className="col-sm-4 col-md-4 col-lg-2">
      <a href="https://www.javascript.com" rel="noreferrer" target="_blank">
        <i className="fab fa-3x fa-js text-warning"></i>
      </a>
      </div>
      <div className="col-sm-4 col-md-4 col-lg-2">
      <a href="https://reactjs.org" rel="noreferrer" target="_blank">
        <i className="fab fa-3x fa-react text-primary"></i>
      </a>
      </div>
      <div className="col-sm-4 col-md-4 col-lg-2">
      <a href="https://www.nodejs.org/en/about/" rel="noreferrer" target="_blank">
        <i className="fab fa-3x fa-node text-success"></i>
      </a>
      </div>
      <div className="col-sm-4 col-md-4 col-lg-2">
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" rel="noreferrer" target="_blank">
        <i className="fab fa-3x fa-html5 text-danger"></i>
      </a>
      </div>
      <div className="col-sm-4 col-md-4 col-lg-2">
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" rel="noreferrer" target="_blank">
        <i className="fab fa-3x fa-css3-alt text-primary"></i>
      </a>
      </div>
      <div className="col-sm-4 col-md-4 col-lg-2">
      <a href="https://getbootstrap.com/" rel="noreferrer" target="_blank">
        <i className="fab fa-3x fa-bootstrap text-purple"></i>
      </a>
      </div>
      </div>
        <div className="row mt-4">
        <div className="col-sm-12 col-md-4 col-lg-4">
        <a href="https://www.mongodb.com/" rel="noreferrer" target="_blank" >
        <img style={{width:"110px", margin:"10px"}} src={mongoDbLogo} alt="monoDb Logo" />
        </a>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
        <a href="https://expressjs.com/" rel="noreferrer" target="_blank">
        <img style={{width:"110px", margin:"10px"}} src={expressLogo} alt="express.JS Logo" />
        </a> 
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
        <a href="https://react-redux.js.org/" rel="noreferrer" target="_blank">
        <img style={{width:"110px", margin:"10px"}} src={reduxLogo} alt="Redux Logo" />
        </a> 
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
        <a href="https://materializecss.com/" rel="noreferrer" target="_blank">
        <img style={{width:"65px", margin:"30px 10px 10px 10px", }} src={materializeLogo} alt="material Logo" /> 
        </a>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
        <a href="https://www.mysql.com/" rel="noreferrer" target="_blank">
        <img style={{width:"80px", margin:"10px"}} src={mySQL} alt="mySQL Logo" /> 
        </a>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
        <a href="https://jquery.com/" rel="noreferrer" target="_blank">
        <img style={{width:"80px", margin:"10px"}} src={jQueryLogo} alt="express.JS Logo" /> 
        </a>
        </div>
        </div>
      </div>
    </>
  );
}

export default SkillsIcons;