import React from "react";

function Footer() {

const date = new Date();
const year = date.getFullYear();

  return (<footer className="footer mt-auto container-fluid">
  <div className="row">
    <div className="col bg-green p-1"></div>
  </div>
  <div className="row">
      <div className="col-md-12 text-center">
        <a href="https://github.com/deleonfrancis" target="_blank" rel="noreferrer">
          <i className="fab fa-github fa-3x text-white p-3"></i>
        </a>
        <a href="https://www.linkedin.com/in/deleon-francis-9b09291b9/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin fa-3x p-3"></i>
        </a>              
      </div>
      <div className="col-md-12 text-center">
        <p className="text-white m-0">E-mail: <span className="text-primary">dxfrancis.coding@gmail.com</span></p>
        <p className="text-white mb-1">Phone: <span className="text-primary">(407) 437-1137</span></p>
        <div className="col-md-12 text-center copyright-text">
        <p className="m-0 p-0">{`© Copyright ${year}`}</p>
        </div>
        
      </div>
    </div>    
</footer>
  );
}

export default Footer;