import React from "react";

function Footer() {

const date = new Date();
const year = date.getFullYear();

  return (<footer class="footer mt-auto container-fluid">
  <div class="row">
    <div class="col bg-green p-1"></div>
  </div>
  <div class="row">
      <div class="col-md-12 text-center">
        <a href="https://github.com/deleonfrancis" target="_blank">
          <i class="fab fa-github fa-3x text-white p-3"></i>
        </a>
        <a href="https://www.linkedin.com/in/deleon-francis-9b09291b9/" target="_blank">
          <i class="fab fa-linkedin fa-3x p-3"></i>
        </a>              
      </div>
      <div class="col-md-12 text-center">
        <p class="text-white m-0">E-mail: <span class="text-primary">dxfrancis.coding@gmail.com</span></p>
        <p class="text-white">Phone: <span class="text-primary">(407) 437-1137</span></p>
        <p class="copyright-text py-1">{`© Copyright ${year}`}</p>
      </div>
    </div>    
</footer>
  );
}

export default Footer;
