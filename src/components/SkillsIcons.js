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
        <i style={{margin:"10px"}} className="fab fa-3x fa-js text-warning mx-2"></i>
        <i style={{margin:"10px"}} className="fab fa-3x fa-react text-primary mx-2"></i>
        <i style={{margin:"10px"}} className="fab fa-3x fa-node text-success mx-2"></i>
        <i style={{margin:"10px"}} className="fab fa-3x fa-html5 text-danger mx-2"></i>
        <i style={{margin:"10px"}} className="fab fa-3x fa-css3-alt text-primary mx-2"></i>
        <i style={{margin:"10px"}} className="fab fa-3x fa-bootstrap text-purple mx-2"></i>
        <br />
        <div className="row mt-4">
        <div className="col-sm-12 col-lg-6">
        <img style={{width:"150px", margin:"10px"}} src={mongoDbLogo} alt="monoDb Logo" />
        </div>
        <div className="col-sm-12 col-lg-6"> 
        <img style={{width:"150px", margin:"10px"}} src={expressLogo} alt="express.JS Logo" />
        </div>
        <div className="col-sm-12 col-lg-6"> 
        <img style={{width:"150px", margin:"10px"}} src={reduxLogo} alt="Redux Logo" />
        </div>
        <div className="col-sm-12 col-lg-6">
        <img style={{width:"100px", margin:"10px"}} src={materializeLogo} alt="material Logo" /> 
        </div>
        <div className="col-sm-12 col-lg-6">
        <img style={{width:"100px", margin:"10px"}} src={mySQL} alt="mySQL Logo" /> 
        </div>
        <div className="col-sm-12 col-lg-6">
        <img style={{width:"100px", margin:"10px"}} src={jQueryLogo} alt="express.JS Logo" /> 
        </div>
        </div>
        
        
      </div>
      {/* <div className="mt-3">
        <p className="skills-no-icon">Context API</p>
      </div> */}
    </>
  );
}

export default SkillsIcons;