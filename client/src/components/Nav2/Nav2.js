import React from "react";
import Dropdown from "../Dropdown";
import MavenHeader from "../MavenHeader";

import "./Nav2.css";

//import NavHeader from "../NavHeader";
//import OAuthBtn from "../OAuthBtn"; //OAuth WAS located as a button on the Nav.
//import Signup from "../Signup";

const Nav2 = () =>
  <nav className="navbar navbar-default navbar-fixed-top" style={{padding: "50px", zIndex: 1}}>
    <div className="container-fluid">

      <a href="/" className="navbar-brand">
        <img src="/favicon.png" alt="Mavens and Mavericks Logo" style={{width:"100px", height:"75px"}} />
      </a>
       
	  <MavenHeader id={this.props.id}/>
      <Dropdown/>
      
    </div>
  </nav>;

export default Nav2;