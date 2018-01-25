//React Libary Imports
//=============================
import React, { Component } from "react";

//API Routing Import:
//=============================
import API from "../../utils/API";

//Componenet imports:
//=============================
import "./SignOut.css";
//import OAuthBtn from "../OAuthBtn";

//=================================================================================
//=================================================================================

class SignOut extends Component {

  handleSignOut = event => {
    const id = this.props.id; //does this need to be "this.props._id" >> ie: with the underscore?!?!?!
    console.log("id = " + id);

    API.deleteSessionQuestionnaireId(this.props.id, this.props.type)
      .then(res =>
         window.location.pathname = "/"
      )
      .catch(err => console.log(err));
  }

  handleProfileClick = event => {
    API.getSessionQuestionnaireId(this.props.id, this.props.type)
      .then(res =>
         window.location.pathname = "/api/questionnaires/" + res.data.questionnaireId + "/" + res.data.questionnaireType,
      )
      .catch(err => console.log(err));
  }



  render() {
    return(
      <div className="fixed-action-btn toolbar sign-out">

        <a className="btn-floating btn-large blue">
          <i className="large material-icons">person_pin</i>
          <span> Sign Out</span>
        </a>

        <ul>
          <li className="waves-effect waves-light"><a className="btn-xs btn-primary" onClick={this.handleProfileClick}><i className="material-icons">person_pin</i>My Profile</a></li>
          <li className="waves-effect waves-light"><a onClick={this.handleSignOut}><i className="material-icons">computer</i> Sign Out</a></li> 

        </ul>
      </div>
    );
  }
}

export default SignOut;

      // <li className="waves-effect waves-light"><a href="/"><i className="material-icons">wb_incandescent</i>  Mentee Sign Out</a></li>
      // <li className="waves-effect waves-light"><a href="/"><i className="material-icons">vpn_key</i>  Mentor Sign Out</a></li> 