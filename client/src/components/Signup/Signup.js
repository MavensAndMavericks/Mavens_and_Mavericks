import React from "react";
import "./Signup.css";

const Signup = () =>
  <div className="fixed-action-btn toolbar sign-up">

    <a className="btn-floating btn-large blue">
      <i className="large material-icons">person_pin</i>
      <span> Sign Up</span>
    </a>

    <ul>
      <li className="waves-effect waves-light"><a href="/Questionnaire"><i className="material-icons">wb_incandescent</i> Mentee Sign Up</a></li>
      <li className="waves-effect waves-light"><a href="/Questionnaire"><i className="material-icons">vpn_key</i> Mentor Sign Up</a></li>
      <li className="waves-effect waves-light"><a href="/"><i className="material-icons">close</i> Close</a></li>
    </ul>
  </div>

export default Signup;

