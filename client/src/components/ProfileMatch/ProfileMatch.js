
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

//import { List, ListItem } from "../List";


//=================================================================================
class ProfileMatch extends Component {
	state = {
		questionnaire: [],
		id: "",
		firstName:"", 
		lastName: "", 
		type: "",
		gitHub: "",
		quote: "", 
		coded: "", 
		profession: "",
		schooling: "",
		impact: "",
		reasons: "",
		careerLevel: "",
	    languages: [],
	    industryExperience: []

	};


	// componentDidMount(id) {
	// 	this.loadMatches(id);
	// };

	// //Matching Logic =========================================
	// loadMatches = (id) => {
	//    API.getMatches(id)

	//    //var count = 0;
	//    //for(i=0; i <)
	//      .then(res =>
	//        this.setState({ 
	//        	questionnaire:res.data,

	//     	})
	//      )
	//      .catch(err => console.log(err));
	// }; 


	render() {
		return(
			<div>	
				<Container className="container profile-matches">

			    	<Row>
				    	<Col size="sm-12">
				    		<div className="profile-matches">

							   <Jumbotron className="jumbotron"> 			            
					           {this.state.questionnaire ? (
					              
					                  <main key={this.state._id}>
					                     <Col size="sm-4">	
					                      <img className="img-responsive" src={"http://placehold.it/300x300&text=slide1"} alt="Github Profile Pic"/> 
					                     </Col>

					                     <Col size="sm-8">	
					                      <h2>
					                        <strong>Name: {this.state.questionnaire.firstName} {this.state.questionnaire.lastName}</strong>
					                      </h2>
					                      <h3> 
	 									  	<Link to={"https://github.com/" + this.state.questionnaire.gitHub} target="_blank">
	 							               	<strong>Github Handler: {this.state.questionnaire.gitHub}</strong>
	 							           	</Link>
	 									   </h3>
					                      <h4>Industries of Interest {this.state.questionnaire.industries} </h4>
	 									  <h4>Languages: {this.state.questionnaire.languages} </h4>
	 									  <h4>Reason for Mentorship {this.state.questionnaire.impact} </h4>
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
	
export default ProfileMatch;