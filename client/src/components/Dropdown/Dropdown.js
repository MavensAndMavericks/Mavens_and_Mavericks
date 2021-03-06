//React Libary Imports
//=============================
import React from "react";

//API Routing Import:
//=============================
// import API from "../../utils/API";

//Componenet imports:
//=============================
import "./Dropdown.css";
//import OAuthBtn from "../OAuthBtn";

//=================================================================================
//=================================================================================

const Dropdown = props => (

      <div>

        <div className="navbar-header">
          <button type="button" className="collapsed navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" /> 
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          </div>
        

        <ul className="nav navbar-nav navbar-right navbar-collapse-1">
          <li><a href="/aboutus">About Us</a></li>
          <li className="dropdown">
            <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style={{marginRight: "50px"}}>Learn More<span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a href="/">Home Page</a></li>
              <li><a href="/mentorsarekey">How We Define Mentor</a></li>
              <li><a href="/openprojects">Testimonials</a></li>
              <li><a href="/QandA">Q &#x26; A</a></li>
            </ul>
          </li>
        </ul>

      </div>

);

export default Dropdown;
 // <li><a className="btn-xs btn-primary" onClick={this.handleClick}>My Profile</a></li>


// <li><a href="/api/questionnaires/" + {this.props.id} + "/" {this.props.type} + "">My Profile</a></li>  //

