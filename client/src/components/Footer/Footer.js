//React Library import:
//=============================
import React from "react";

//=================================================================================
const Footer = () =>
  <footer className="page-footer" style={{backgroundColor: "blue"}}>
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Contact Us</h5>
          <p className="grey-text text-lighten-4">Austin, TX</p>
          <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
        </div>
        <div className="col l4 offset-l2 s12">
          <h5 className="white-text">Outside References</h5>
          <ul>
            <li><a className="grey-text text-lighten-3" href="/">Link 1</a></li>
         </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container text-center">
      © 2017 Copyright Text
      </div>
    </div>
  </footer>;

export default Footer;