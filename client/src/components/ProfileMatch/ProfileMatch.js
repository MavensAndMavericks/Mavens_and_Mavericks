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
		matches: []

	};

	componentDidMount() {
		console.log("Pathname = " + window.location.pathname);
	    const url = window.location.pathname;
	    const id = url.split("/")[3];
	    console.log("id = " + id);

	    this.loadQuestionnaire(id);
	};



	loadQuestionnaire = (id) => {
	   API.getMatches(id)
	     .then(res =>
	       this.setState({ 
	       	matches:res.data 
	       })
	     )
	     .then(() => {
	   console.log("hey" + this.state.matches);
	     }) // MUST MAKE THIS A FUNCTION that renders a FUNCTION >>> by making this a function in a PROMISE chain, it will NOT PROCESS until the promise BEFORE IT has rendered its result!!! :)
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
					           {this.state.matches ? (
					              
					                  <main> {this.state.matches}

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
	
export default ProfileMatch;