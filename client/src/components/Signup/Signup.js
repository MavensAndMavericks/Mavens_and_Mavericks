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
      
      <li className="waves-effect waves-light"><a href="/MaverickQuestionnaire"><i className="material-icons">wb_incandescent</i> Mentee Sign Up</a></li>
      <li className="waves-effect waves-light"><a href="/MavenQuestionnaire"><i className="material-icons">vpn_key</i> Mentor Sign Up</a></li>  
 
      <Modal

	header='Modal Header'
	trigger={<li className="modalClass"><i className="material-icons">computer</i>Sign In</li>}>
	<p>SEND BIRD GOES HERE.</p>
    </Modal> 

    </ul>
  </div>

export default Signup;

