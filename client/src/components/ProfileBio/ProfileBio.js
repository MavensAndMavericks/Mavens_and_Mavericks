//React Library imports:
//=============================
import React, { Component } from "react";
import { Link } from "react-router-dom";

//API Routing Import:
//=============================
import API from "../../utils/API";

//Componenet imports:
//=============================
import SendBird from 'sendbird';
// import SendbirdLogin from "../SendbirdLogin"
import { Col, Row, Container } from "../Grid";
import Jumbotron from "../Jumbotron";
import { InputBox } from "../../components/Form";
import "./ProfileBio.css";


//=================================================================================
class ProfileBio extends Component {
	state = {
		questionnaire: [],
		// userId: "",
	 //    nickname: "",
	 //    error: "",
		// id: "",
		// firstName:"", 
		// lastName: "", 
		// type: "",
		// gitHub: "",
		// quote: "", 
		// coded: "", 
		// profession: "",
		// schooling: "",
		// impact: "",
		// reasons: "",
		// careerLevel: "",
	 //    languages: [],
	 //    industryExperience: [],
	    githubUrl: ""
	};

	componentDidMount() {
		console.log("Pathname = " + window.location.pathname);
	    const url = window.location.pathname;
	    const id = url.split("/")[3];
	    console.log("id = " + id);

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
	     	this.loadGithub(this.state.questionnaire.gitHub);
	     	this._onSignUp(); // !! PASSING THE GITHUB/FULLNAME TO SENDBIRD HERE !!
	     }) 
	     .catch(err => console.log(err));
	}; 


	loadGithub = (gitHub) => {
		API.getGithubUrl(gitHub)
		  .then(res =>
	       this.setState({ 
	   		githubUrl: res.data //single obj //.avatar_url >>>> to find the pic
	        })
	       )
	      .catch(err => console.log(err));
	};


	//Sendbird USERNAME/NICKNAME Handling
	_onSignUp = () => {
	      const { userId, nickname } = this.state;
	      const sb = new SendBird({ "appId": "FB7BB4B3-4917-4831-B2E0-EB94FB4A4BD7" });
	      sb.connect(userId, (error) => {
	          if (error) {
	          	  console.log("error = " + error);
	              this.setState({ error });
	          } else {
	              sb.updateCurrentUserInfo(nickname, null, (error) => {
	                  if (error) {
	                  	  console.log("error = " + error);
	                      this.setState({ error });
	                  } else {
	                      this.setState({
	                          userId: this.state.gitHub,
	                          nickname: (this.state.firstName) + " " + (this.state.lastName),
	                          error: ''
	                      }, () => {
	                          this.props.sendbird;
	                      });
	                  }
	              })
	          }
	      })
	}

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
	};

	render() {
		return(
			<div>	
				<Container className="container profile-bio">

			    	<Row>
				    	<Col size="sm-12">
				    		<div className="profile-bio">
				    			{/*<br/>
						    	<h3 className="text-center">ProfileBio</h3>*/}
						    
							   <Jumbotron className="jumbotron"> 			            
					           {this.state.questionnaire ? (
					              
					                  <main key={this.state._id}>
					                     <Col size="sm-4">	
					                      <img className="img-responsive" src={this.state.githubUrl.avatar_url} alt="Github Profile Pic"/> 
					                     </Col>

					                     <Col size="sm-8">	
					                      <h3>Name: 
					                        <strong className>{this.state.questionnaire.firstName} {this.state.questionnaire.lastName}</strong>
					                      </h3>
					                      <h4> 
					                      	<strong>Github Handler: </strong>
		 									  	<Link to={"https://github.com/" + this.state.githubUrl.login} target="_blank">
		 							               	<strong className="githubHandler">{this.state.githubUrl.login}</strong>
		 							           	</Link>
	 									   </h4>
					                      <h5>Industries of Interest: {this.state.questionnaire.industryExperience} </h5>
	 									  <h5>Languages: {this.state.questionnaire.languages} </h5>
	 									  <h5>Reason for Mentorship: {this.state.questionnaire.impact} </h5>
					                     </Col>
					                  </main>

					            ) : (

					              <h3 className="text-center">No Results to Display</h3>
					           )}

					           </Jumbotron>
				           </div>
						</Col>
					</Row>

					<br/>
	                <br/>
					

				</Container>

				<div id="sb_widget"></div>

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
			</div>
		);
	}
}

const styles = {
    containerStyle: {
        marginTop: 10
    }
}
	
export default ProfileBio;

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




