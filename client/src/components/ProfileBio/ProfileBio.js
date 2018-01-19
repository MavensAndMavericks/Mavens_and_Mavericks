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

	// getAllUrlParams(url) {
	//   var queryString = url ? url.split('welcomeMaven/')[1] : window.location.search.slice(1); // retreives query string from url (optional) or window
	//   var URLid = {};

	//   if (queryString) { // if query string exists, push it's value up into the URLid
	//   	JSON.stringify(queryString);
	//   	URLid.push(queryString);
	//   	console.log(queryString);
	//   }  
	// };

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
	       	questionnaire:res.data,
	       	// id:res.data._id,
	       	// firstName:res.data.firstNam,
	        // lastName:res.data.lastName//,
	        //lastName: "wayne"//,
	        // gitHub:res.data.github,
	        // quote:res.data.quote,
	        // code:res.data.code,
	        // profession:res.data.profession,
	        // schooling:res.data.schooling,
	        // impact:res.data.impact,
	        // reasons:res.data.reasons,
	        // careerLevel:res.data.careerLevel,
	        // languages:res.data.languages,
	        // industryExperience:res.data.industryExperience 
	    	})
	     )
	     .catch(err => console.log(err));
	}; 

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
				    			{/*<br/>
						    	<h3 className="text-center">ProfileBio</h3>*/}
						    
							   <Jumbotron className="jumbotron"> 			            
					           {this.state.questionnaire ? (
					              
					                  <main key={this.state._id}>
					                     <Col size="sm-4">	
					                      <img className="img-responsive" src={"http://placehold.it/300x300&text=slide1"} alt="Github Profile Pic"/> 
					                     </Col>

					                     <Col size="sm-8">	
					                      <h2>
					                      	<h3>ID TEST: { this.state.questionnaire._id } </h3>
					                        <strong>Name: {this.state.questionnaire.firstName} {this.state.questionnaire.lastName}</strong>
					                      </h2>
					                      <h3> 
	 									  	<Link to={"https://github.com/" + this.state.questionnaire.gitHub} target="_blank">
	 							               	<strong>Github Handler: {this.state.questionnaire.gitHub}</strong>
	 							           	</Link>
	 									   </h3>
					                      <h4>Industries of Interest: {this.state.questionnaire.industryExperience} </h4>
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

					<br/>
	                <br/>
					<Row>
						<Col size="sm-12">						
			               <Jumbotron>
			                 <h1 className="text-center">Matched Mentor?</h1>
			               </Jumbotron>					
						</Col>
					</Row>

				</Container>

			</div>
		);
	}
}
	
export default ProfileBio;
//Img tage above
//src={questionnaire.image}


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




