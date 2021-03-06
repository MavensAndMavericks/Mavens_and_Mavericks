//React Library imports:
//=============================
import React, { Component } from "react";
import { Link } from "react-router-dom";

//API Routing Import:
//=============================
import API from "../../utils/API";

//External Imports:
//=============================
import SendBird from 'sendbird';

//Componenet imports:
//=============================
import { Col, Row, Container } from "../Grid";
import Jumbotron from "../Jumbotron";
// import SendbirdLogin from "../SendbirdLogin"
import "./ProfileBio.css";


//=================================================================================
class ProfileBio extends Component {
	state = {
		questionnaire: null,
		githubUrl: {}
		// userId: "",
	 //    nickname: "",
	 //    error: "",
		// id: "",
	};

	componentDidMount() {
		// console.log("Pathname = " + window.location.pathname);
 	//     const url = window.location.pathname;
 	//     const id = url.split("/")[3]
	   
	   const type = this.props.type;//sessionstorage>
	   console.log("type = " + type);

	    const id = this.props.id; //  //does this need to be "this.props._id" >> ie: with the underscore?!?!?!
	    console.log("id = " + id);
		// Clear sessionStorage
          sessionStorage.clear();
          // Store all content into sessionStorage
          sessionStorage.setItem("questionnaireId", id); //<this is for sessionstorage>
          sessionStorage.setItem("questionnaireType", type); //<this is for sessionstorage>
	  	this.loadQuestionnaire(id);
	};



	loadQuestionnaire = (id) => {
	   API.getQuestionnaire(id)
	     .then(res =>
	       this.setState({ 
	       	questionnaire:res.data
	       })
	     )
	     .then(() => {// MUST MAKE THIS A FUNCTION that renders a FUNCTION >>> by making this a function in a PROMISE chain, it will NOT PROCESS until the promise BEFORE IT has rendered its result!!! :)
	     	console.log("questionnaire.gitHub = " + this.state.questionnaire.gitHub);
	     	console.log("_onSignUp is using the following gitHub, and firstName/lastName :" + this.state.questionnaire.gitHub + ", " + this.state.questionnaire.firstName + ", " + this.state.questionnaire.lastName);
	     	this._onSignUp(this.state.questionnaire.github, this.state.questionnaire.firstName, this.state.questionnaire.lastName); // !! PASSING THE GITHUB/FULLNAME TO SENDBIRD HERE !!
	     }) 
	     .catch(err => console.log(err));
	};



	//Sendbird USERNAME/NICKNAME Handling
	_onSignUp = (github, firstName, lastName) => {
	      const nickname  = firstName + " " + lastName;
	      const userId = github;
	      const appId = "FB7BB4B3-4917-4831-B2E0-EB94FB4A4BD7";

	     const sb = new SendBird({ "appId": "FB7BB4B3-4917-4831-B2E0-EB94FB4A4BD7" });
	      
	      sb.connect(userId, nickname, function() {
	      	this.userId = userId;
	      	this.nickname = nickname;
	      })
	}
	      // sb.connect(userId, (error) => {
	      //     if (error) {
	      //     	  console.log("error = " + error);
	      //         this.setState({ error });
	      //     } else {
	      //         sb.updateCurrentUserInfo(nickname, null, (error) => {
	      //             if (error) {
	      //             	  console.log("error = " + error);
	      //                 this.setState({ error });
	      //             } else {
	      //                 this.setState({
	      //                     userId: userId,
	      //                     nickname: nickname,
	      //                     error: ''
	      //                 }, () => {
	      //                     const { userid, nickName } = this.props;
	      //                 });
	      //             }
	      //         })
	      //     }
	      // })
	//}

	_userIdChanged = (userId) => {
        this.setState({ userId });
    }

    _nicknameChanged = (nickname) => {
        this.setState({ nickname });
    }

	handleInputChange = event => {
	    const { name, value } = event.target;
	    this.setState({
	      [name]: value
	    });
	}


	render() {
		return(

            <div>
                <Container fluid>
                    <br/>

                    <Row>
                     <Col size="md-12">
                     <div className="profile-bio">

						    
							   <Jumbotron className="img-responsive"> 			            
					           		{this.state.questionnaire ? (
					              
					                  <main key={this.state._id}>
					                     <Col size="sm-4">	
					                      <br/>
					                      <br/>
					                      <img className="img-responsive" src={this.state.githubUrl.avatar_url} alt="Github Profile Pic"/> 
					                      <br/>
					                      <br/>
					                      <p>"{this.state.questionnaire.quote}"</p>
					                     </Col>

					                     <Col size="sm-1"></Col>

					                     <Col size="sm-7">
					                      <h3>
					                        <strong className="userFullName">{" " + this.state.questionnaire.firstName} {this.state.questionnaire.lastName}</strong>
					                      </h3>	
					                      <h4>{this.state.questionnaire.profession}</h4>
					                      <h4> 
					                      	<strong>Github Handler: </strong>
		 									  	<Link to={"https://github.com/" + this.state.githubUrl.login} target="_blank">
		 							               	<strong className="githubHandler">{this.state.githubUrl.login}</strong>
		 							           	</Link>
	 									   </h4>
	 									   
	 									   
	 									  <hr/>									  
										  <p><strong>Languages:</strong><br/>{this.state.questionnaire.languages.join(", ")}</p>
					                      <p><strong>Industry Interest:</strong><br/>{this.state.questionnaire.industryExperience.join(", ")}</p>								  
										   <p><strong>Coding Experience:</strong><br/> {this.state.questionnaire.coded}</p>
	 									  <p><strong>Reason for Mentorship:</strong><br/> {this.state.questionnaire.reasons}</p>
										 									
					                     </Col>
					                  </main>

					            ) : (

					              <h3 className="text-center">No Results to Display</h3>
					           )}
								
					           </Jumbotron>
				           </div>
						</Col>
					</Row>

				</Container>
			</div>
		);
	}
}
	
export default ProfileBio;


//////////////////////////////////////////////////
//////////////////////////////////////////////////

				{/*<div id="sb_widget"></div>*/}

{/*				<Container>
	                <Row style={{backgroundColor: '#fff', flex: 1}}>
	                  
	                  <Col size ="md-2" style={styles.containerStyle}>
	                        <InputBox
	                            label="User ID"
	                            placeholder="user id"
	                            value={this.state.userId}
	                            onChangeText={this._userIdChanged}
	                        />
	                    </Col>

	                    <Col size ="md-2" style={styles.containerStyle}>
	                        <InputBox
	                            label="Nickname"
	                            placeholder="nickname"
	                            value={this.state.nickname}
	                            onChangeText={this._nicknameChanged}
	                        />
	                    </Col>

	                </Row>
	            </Container>
*/}

//////////////////////////////////////////////////
//<h3><strong>{this.state.githubUrl.login}</strong></h3>

//////////////////////////////////////////////////
//Img tage above
//src={questionnaire.image}

//<h3>ID TEST: { this.state.questionnaire._id } </h3>
/////////////////////////////////////////////////

	// componentDidMount() {
	//     this.loadQuestionnaires();
	// }

	// loadQuestionnaires = () => {
	//    API.getQuestionnaire(id)
	//      .then(res =>
	//        this.setState({ questionnaire: res.data, firstName: "", lastName: "", gitHub: "", quote: "", code: "",  profession: "", schooling: "", impact: "", resasons: "" })
	//      )
	//      .catch(err => console.log(err));
	// };   

/////////////////////////////////////////////////
	// handlePageLoad = event => {
 //    	event.preventDefault();
	//     API.loadQuestionnaires())
	//         .catch(err => console.log(err))
	//     }
 //  	};




