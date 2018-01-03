import React from "react";
import Dropdown from "../Dropdown";

const Nav = () =>
  <nav className="navbar navbar-default navbar-fixed-top">
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

       <Dropdown/>
      
    </div>
  </nav>;

export default Nav;