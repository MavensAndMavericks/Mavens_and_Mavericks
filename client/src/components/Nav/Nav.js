import React from "react";
import Dropdown from "../Dropdown";

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          <img src="/favicon.png" alt="Mavens and Mavericks Logo" />
        </a>
      </div>

      <div>
          <Dropdown/>         
      </div>
      
    </div>
  </nav>;

export default Nav;
