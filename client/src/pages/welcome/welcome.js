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
import Parallax1 from "../../components/Parallax1";
import { Col, Row } from "../../components/Grid";

//=================================================================================
class Welcome extends Component {
  render() {
    return (
    	<div>
    		<Nav/>
	        <Row className="valign-wrapper">
	          <Col className="justify-content-center" size="md-12" style={{margin:"0px"}}>
	            <Parallax1/>
	          </Col>
	        </Row>
        </div>
    );
  }
}

export default Welcome;

// WHY does not the "valign-wrapper" work above??