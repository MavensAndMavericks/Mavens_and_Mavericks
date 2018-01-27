//React Library imports:
//=============================
import React, { Component } from "react";
//import { Link } from "react-router-dom";

//API Routing Import:
//=============================
//import API from "../../utils/API";

//Componenet imports:
//=============================
import Nav1 from "../../components/Nav1";
import Signup from "../../components/Signup";
import SignOut from "../../components/SignOut";
import Parallax5 from "../../components/Parallax5";
import { Col, Row } from "../../components/Grid";
import Footer from "../../components/Footer";

//=================================================================================
class AboutUs extends Component {

componentDidMount(id) {
  this.helloSessionId(id)
}
helloSessionId = () => {
 const sessionId = sessionStorage.getItem("questionnaireId");
  console.log(sessionId)
}

  render() {
    return (
    	<div>
    		<Nav1/>

        <div>                  
           {sessionStorage.getItem("questionnaireId") === null ? (
              <Signup />
            ) : (
              <SignOut />
           )}
        </div>


        

        <br/>
        <br/>
        <br/>
        
        <Row className="valign-wrapper">
          <Col className="justify-content-center" size="md-12" style={{margin:"0px"}}>
            <Parallax5/>
          </Col>
        </Row>

        <Footer/>
      </div>
    );
  }
}

export default AboutUs;

// WHY does not the "valign-wrapper" work above??