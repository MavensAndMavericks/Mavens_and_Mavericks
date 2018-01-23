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
import ProfileBio from "../../components/ProfileBio";
import ProfileMatch from "../../components/ProfileMatch";
import ProjectBoard from "../../components/ProjectBoard";
import { Col, Row } from "../../components/Grid";
import Footer from "../../components/Footer";
import "./MavenProfile.css";
// import API from "../../utils/API";


//import Parallax5 from "../../components/Parallax5";

//=================================================================================
// !! href for this page === "welcomeMaven" !!

class MavenProfile extends Component {


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

                <ProfileBio/>
                <br/>

                <ProjectBoard/>

               <ProfileMatch/>

                
               

              </div>

	          </Col>
	        </Row>

        <Footer/>
      </div>
    );
  }
}

export default MavenProfile;

// <MavenHeader/>

  // componentDidMount() {
  //   this.showSendbirdWidget();
  // }
  //   showSendbirdWidget = () => {
  //   API.getProfiles()
  //     console.log("I'm should be showing the widget")
  //     .catch(err => console.log(err));
  // }
