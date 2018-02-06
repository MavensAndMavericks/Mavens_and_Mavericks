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
import Parallax4 from "../../components/Parallax4";
import { Col, Row } from "../../components/Grid";
import Footer from "../../components/Footer";

//=================================================================================
class ExampleProj extends Component {
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
	            <Parallax4/>

	          </Col>
	        </Row>
        <Footer/>
      </div>
    );
  }
}

export default ExampleProj;

// WHY does not the "valign-wrapper" work above??