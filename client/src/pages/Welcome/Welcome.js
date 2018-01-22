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
//import WelcomeMsg from "../../components/WelcomeMsg";

import SlideShow from "../../components/SlideShow";
// import {Carousel} from "react-materialize";
import Parallax1 from "../../components/Parallax1";
import Parallax1b from "../../components/Parallax1b";
import { Col, Row } from "../../components/Grid";
import Footer from "../../components/Footer";

//=================================================================================

//looking at welcome.js issue


class Welcome extends Component {


handleHideModal(){
    this.setState({view: {showModal: false}})
}
handleShowModal(){
    this.setState({view: {showModal: true}})
}

  render() {
    return (
    	<div>
    		<Nav1/>
        <Signup />
        <br/>
        <br/>

	        <Row className="valign-wrapper">
	          <Col size="md-12" style={{margin:"0px"}}>
              <Parallax1/>

              <SlideShow/>
              <Parallax1b/>
	          </Col>
	        </Row>

        <Footer/>
      </div>
    );
  }
}

export default Welcome;
// WHY does not the "valign-wrapper" work above??
//<h2>Looking to discover new talent, establish new partnerships, and leave a legacy?</h2>