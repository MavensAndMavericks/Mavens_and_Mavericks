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
import Parallax2 from "../../components/Parallax2";
import { Col, Row } from "../../components/Grid";
import Footer from "../../components/Footer";

//=================================================================================
class MentorDef extends Component {
  render() {
    return (
    	<div>
    		<Nav1/>
        <Signup />
        <br/>
        <br/>
        <br/>
        
	        <Row className="valign-wrapper">
	          <Col className="justify-content-center" size="md-12" style={{margin:"0px"}}>
	            <Parallax2/>
	          </Col>
	        </Row>
        <Footer/>
      </div>
    );
  }
}

export default MentorDef;

// WHY does not the "valign-wrapper" work above??