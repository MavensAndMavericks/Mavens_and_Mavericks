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
import SignOut from "../../components/SignOut";
import ProfileBio from "../../components/ProfileBio";
import ProjectBoard from "../../components/ProjectBoard";
import { Col, Row } from "../../components/Grid";
import Footer from "../../components/Footer";
import "./MavenProfile.css";
import API from "../../utils/API";
import Sendbird from "../../components/Sendbird";

//import Parallax5 from "../../components/Parallax5";

//=================================================================================
// !! href for this page === "welcomeMaven" !!

class MavenProfile extends Component {
   logIn= (props) => {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
      return <Sendbird />
    }
  }

  render() {
  
    return (
    	<div>
    		<Nav/>
        <SignOut />

	        <Row>
	          <Col className="justify-content-center" size="md-12">
	            
              <div className="background-image" style={{backgroundImage:"url(/assets/consumer-Electronic.jpeg)", marginTop:"75px"}}>
                <br/>
                <br/>

                <ProfileBio/>
                <ProjectBoard/>

                <Sendbird isLoggedIn={true} />
               

              </div>

	          </Col>
	        </Row>

        <Footer/>
      </div>
    );
  }
}

export default MavenProfile;

  // componentDidMount() {
  //   this.showSendbirdWidget();
  // }
  //   showSendbirdWidget = () => {
  //   API.getProfiles()
  //     console.log("I'm should be showing the widget")
  //     .catch(err => console.log(err));
  // }
