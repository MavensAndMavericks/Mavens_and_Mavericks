import React from "react";
import Dropdown from "../Dropdown";
import NavHeader from "../NavHeader";
//import OAuthBtn from "../OAuthBtn"; //OAuth WAS located as a button on the Nav.
//import Signup from "../Signup";

const Nav = () =>
  <nav className="navbar navbar-default navbar-fixed-top" style={{padding: "50px", zIndex: 1}}>
    <div className="container-fluid">
      
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> 
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>

        <a href="/" className="navbar-brand">
          <img src="/favicon.png" alt="Mavens and Mavericks Logo" />
        </a>
      </div>
       <NavHeader/>
       
       <Dropdown/>
      
    </div>
  </nav>;

export default Nav;