import React from "react";

import "./Signup.css";
import {Modal} from "react-materialize";

const Signup = () =>
  <div className="fixed-action-btn toolbar sign-up">

    <a className="btn-floating btn-large blue">
      <i className="large material-icons">person_pin</i>
      <span> Sign Up</span>
    </a>

    <ul>
      
      <li className="waves-effect waves-light"><a href="/Questionnaire"><i className="material-icons">wb_incandescent</i> Mentee Sign Up</a></li>
      <li className="waves-effect waves-light"><a href="/Questionnaire"><i className="material-icons">vpn_key</i> Mentor Sign Up</a></li>  
 
      <Modal

	header='Modal Header'
	trigger={<li className="waves-effect waves-light"><i className="material-icons">computer</i>Sign In</li>}>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
		incididunt ut labore et dolore magna aliqua.</p>
    </Modal> 
    </ul>

  </div>

export default Signup;

