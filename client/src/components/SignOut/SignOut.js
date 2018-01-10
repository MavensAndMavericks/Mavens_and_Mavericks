import React from "react";
import "./SignOut.css";

const SignOut = () =>
  <div className="fixed-action-btn toolbar sign-out">

    <a className="btn-floating btn-large blue">
      <i className="large material-icons">person_pin</i>
      <span> Sign Out</span>
    </a>

    <ul>
      
      <li className="waves-effect waves-light"><a href="/"><i className="material-icons">wb_incandescent</i>  Mentee Sign Out</a></li>
      <li className="waves-effect waves-light"><a href="/"><i className="material-icons">vpn_key</i>  Mentor Sign Out</a></li>  

    </ul>
  </div>

export default SignOut;