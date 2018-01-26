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
    		<Nav2 id={this.props.match.params.id} type={this.props.match.params.type}/> 

        <SignOut />

	        <Row>
	          <Col className="justify-content-center" size="md-12">
	            
             <div className="background-image" style={{backgroundImage:"url(/assets/consumer-Electronic.jpeg)", marginTop:"75px"}}>
                  <br/>
                  <br/>
                  <br/>
                  
                  <ProfileBio  id={this.props.match.params.id} type={this.props.match.params.type} />
                 
                  <br/>

                  <ProjectBoard id={this.props.match.params.id} type={this.props.match.params.type} />

                  <ProfileMatch id={this.props.match.params.id} type={this.props.match.params.type} />               

              </div>

	          </Col>
	        </Row>

        <Footer/>
      </div>
    );
  }
}

export default MavenProfile;

//<ProfileBio id={this.props.match.params.id}/> THIS IS FOR THE SESSION

// <MavenHeader/>


