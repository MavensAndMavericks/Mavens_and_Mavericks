//React Library imports:
//=============================
import React, { Component } from "react";
import { Link } from "react-router-dom";

//API Routing Import:
//=============================
import API from "../../utils/API";

//Componenet imports:
//=============================
import { Col, Row, Container } from "../Grid";
import Jumbotron from "../Jumbotron";
import "./ProfileBio.css";
//import { List, ListItem } from "../List";


//=================================================================================
class ProfileBio extends Component {
	state = {
		questionnaire: [],
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
	     .then(() => {
	     	console.log("questionnaire.gitHub = " + this.state.questionnaire.gitHub)
	     	this.loadGithub(this.state.questionnaire.gitHub)
	     }) // MUST MAKE THIS A FUNCTION that renders a FUNCTION >>> by making this a function in a PROMISE chain, it will NOT PROCESS until the promise BEFORE IT has rendered its result!!! :)
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
					                      <h3>
					                        <strong>Name: {this.state.questionnaire.firstName} {this.state.questionnaire.lastName}</strong>
					                      </h3>
					                      <h4> 
					                      	<strong>Github Handler: </strong>
		 									  	<Link to={"https://github.com/" + this.state.githubUrl.login} target="_blank">
		 							               	<strong>{this.state.githubUrl.login}</strong>
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

			</div>
		);
	}
}
	
export default ProfileBio;
//{this.state.questionnaire.industryExperience.forEach(experience=> ( experience + ", " ))}

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




