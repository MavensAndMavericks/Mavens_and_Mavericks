import React from "react";
import "./Dropdown.css";
//import OAuthBtn from "../OAuthBtn";

const Dropdown = props => (
  <ul className="nav navbar-nav navbar-right">
    <li><a href="/">Contact Us</a></li>

    <li className="dropdown">
      <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Learn More<span className="caret"></span></a>
      <ul className="dropdown-menu">
        <li><a href="/">How We Define Mentor</a></li>
        <li><a href="/">Example Projects</a></li>
        <li><a href="/">Q &#x26; A</a></li>
      </ul>
    </li>

   

  </ul>
);
export default Dropdown;
