//React Library imports:
//=============================
import React, { Component } from "react";
//import { Link } from "react-router-dom";

//API Routing Import:
//=============================
//import API from "../../utils/API";

//Componenet imports:
//=============================
import Nav2 from "../../components/Nav2";
// import MavenHeader from "../../components/MavenHeader";
import SignOut from "../../components/SignOut";

import ProfileMatch from "../../components/ProfileMatch";


import { Col, Row } from "../../components/Grid";
import Footer from "../../components/Footer";

// import API from "../../utils/API";


//import Parallax5 from "../../components/Parallax5";

//=================================================================================
// !! href for this page === "welcomeMaven" !!

class Match extends Component {


  render() {
  
    return (
    	<div>
    		<Nav2/> 

        <SignOut />

	        <Row>
	          <Col className="justify-content-center" size="md-12">
	            
              <div className="background-image" style={{backgroundImage:"url(/assets/consumer-Electronic.jpeg)", marginTop:"75px"}}>
                <br/>
                <br/>
                <br/>

                
                <br/>

     

               <ProfileMatch/>

                
               

              </div>

	          </Col>
	        </Row>

        <Footer/>
      </div>
    );
  }
}

export default Match;

// <MavenHeader/>
