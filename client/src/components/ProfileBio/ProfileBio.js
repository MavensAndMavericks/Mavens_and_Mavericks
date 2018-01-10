//React Library imports:
//=============================
import React, { Component } from "react";
//import { Link } from "react-router-dom";

//API Routing Import:
//=============================
import API from "../../utils/API";

//Componenet imports:
//=============================
import { Col, Row, Container } from "../Grid";
import Jumbotron from "../Jumbotron";
import { List, ListItem } from "../List";
import "./ProfileBio.css";


//=================================================================================
class ProfileBio extends Component {
	state = {
		questionnaires: [],
		firstName:"", 
		lastName: "", 
		gitHub: "",
		quote: "", 
		coded: "", 
		profession: "",
		schooling: "",
		impact: "",
		reasons: ""
	};

	componentDidMount() {
	    this.loadQuestionnaires();
	}

	loadQuestionnaires = () => {
	   API.getQuestionnaires()
	     .then(res =>
	       this.setState({ questionnaires: res.data, firstName: "", lastName: "", gitHub: "", quote: "", code: "",  profession: "", schooling: "", impact: "", resasons: "" })
	     )
	     .catch(err => console.log(err));
	};   



	// handlePageLoad = event => {
 //    	event.preventDefault();
	//     API.loadQuestionnaires())
	//         .catch(err => console.log(err))
	//     }
 //  	};

	handleFormSubmit = event => {
	    event.preventDefault();
	    if (this.state.title && this.state.author) {
	      API.saveBook({
	        title: this.state.title,
	        author: this.state.author,
	        synopsis: this.state.synopsis
	      })
	        .then(res => this.loadBooks())
	        .catch(err => console.log(err));
	    }
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
						    	<h3 className="text-center">ProfileBio</h3>
						    </div>	   
						</Col>
					</Row>

					<Row>
						<Col size="sm-12">						
			               <Jumbotron>
			                 <h1 className="text-center">Why have a mentor?</h1>
			               </Jumbotron>
			            
				           {this.state.questionnaires.length ? (
				              <List className="text-center">
				                {this.state.questionnaires.map(questionnaire => (
				                  <ListItem key={questionnaire._id}>
				                      <strong>
				                        {questionnaire.firstName} by {questionnaire.lastName}
				                      </strong>
				                  </ListItem>
				                ))}
				              </List>
				            ) : (
				              <h3 className="text-center">No Results to Display</h3>
				           )}					
						</Col>

					</Row>

				</Container>
			</div>
		);
	}
}
	
export default ProfileBio;
// {this.state.questionnaires.length ? (
// 								{this.state.questionnaires.map(questionnaire => (

// 									<Col size="sm-4"    key={questionnaire._id}   >
// 										<aside className="profile-bio">
// 									    	<img className="img-responsive" src={"http://placehold.it/300x300&text=slide1"} alt="Github Profile Pic"/>
// 									    </aside>	
// 									</Col>

// 									<Col size="sm-8">
// 										<article>
// 									    	<h2>First: {questionnaire.firstName} <span>Last: {questionnaire.lastName} </span></h2>
// 									    	<h3> 
// 									    		<Link to={"https://github.com/" + questionnaire.gitHub}>
// 							                        Github Handler: {questionnaire.gitHub}
// 							                    </Link>
// 									    	</h3>


// 									    	<h4>Industries of Interest {questionnaire.industries} </h4>
// 									    	<h4>Languages: {questionnaire.languages} </h4>
// 									    	<h4>Reason for Mentorship {questionnaire.impact} </h4>
// 									   	</article>	
// 									</Col>
// 								 ))}
// 							) : (
// 							    <h3 className="text-center">No Results to Display</h3>
// 							)}
