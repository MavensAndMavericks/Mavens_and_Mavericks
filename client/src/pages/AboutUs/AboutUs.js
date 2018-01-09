//React Library imports:
//=============================
import React, { Component } from "react";
//import { Link } from "react-router-dom";

//API Routing Import:
//=============================
//import API from "../../utils/API";

//Componenet imports:
//=============================
import Nav from "../../components/Nav";
import Signup from "../../components/Signup";
import Parallax5 from "../../components/Parallax5";
import { Col, Row } from "../../components/Grid";
import Footer from "../../components/Footer";

//=================================================================================
class AboutUs extends Component {
  render() {
    return (
    	<div>
    		<Nav/>
        <Signup />
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