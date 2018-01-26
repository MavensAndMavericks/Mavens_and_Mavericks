//React Library imports:
//=============================
import React, { Component } from "react";

//API Routing Import:
//=============================
//import API from "../../utils/API";

//Componenet imports:
//=============================
import Nav1 from "../../components/Nav1";
import SignOut from "../../components/SignOut";
import ProfileBio from "../../components/ProfileBio";
import ProfileMatch from "../../components/ProfileMatch";
import ProjectBoard from "../../components/ProjectBoard";
import { Col, Row } from "../../components/Grid";
import Footer from "../../components/Footer";
import "./MeetPage.css";
//import Parallax5 from "../../components/Parallax5";

//=================================================================================
class MeetPage extends Component {

  // componentDidMount() {
  //   this.showSendbirdWidget();
  // }
  //   showSendbirdWidget = () => {
  //   API.getProfiles()
  //     console.log("I'm should be showing the widget")
  //     .catch(err => console.log(err));
  // }


  render() {
  
    return (
    	<div>
    		<Nav1/> 

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

export default MeetPage;

