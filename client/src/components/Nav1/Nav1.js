import React from "react";
import Dropdown from "../Dropdown";
import NavHeader from "../NavHeader";

import "./Nav1.css";

//import OAuthBtn from "../OAuthBtn"; //OAuth WAS located as a button on the Nav.
//import Signup from "../Signup";

const Nav1 = () =>
  <nav className="navbar navbar-default navbar-fixed-top" style={{padding: "50px", zIndex: 1}}>
    <div className="container-fluid">

      <a href="/" className="navbar-brand1">
        <img src="/favicon.png" alt="Mavens and Mavericks Logo"/>
      </a>

      <NavHeader/>      
      <Dropdown/>
      
    </div>
  </nav>;

export default Nav1;