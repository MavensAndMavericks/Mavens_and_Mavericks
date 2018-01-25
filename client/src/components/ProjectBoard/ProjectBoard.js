//React Libary Imports
//=============================
import React, { Component } from "react";
import { Link } from "react-router-dom";

//API Routing Import:
//=============================
import API from "../../utils/API";

//External (/Dependency) Import:
//=============================
import * as moment from 'moment';
import {Card, CardTitle} from 'react-materialize';


//Componenet imports:
//=============================
import "./ProjectBoard.css";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

//=================================================================================
class ProjectBoard extends Component {
	state = {
		questionnaire: null,
		github: "",
		id: "",
		githubProjects: []
	};

	componentDidMount() {
		const id = this.props.id;
	    console.log("id = " + id);

	    this.loadQuestionnaire(id);
	};

	loadQuestionnaire = (id) => {
	   API.getQuestionnaire(id)
	     .then(res =>
	       this.setState({ 
	       	questionnaire:res.data,
	       	github: res.data.gitHub,
	       	id: res.data._id
	       })
	     )
	     .then(() => {// MUST MAKE THIS A FUNCTION that renders a FUNCTION >>> by making this a function in a PROMISE chain, it will NOT PROCESS until the promise BEFORE IT has rendered its result!!! :)
	     	console.log("this.state.questionnaire : " + this.state.questionnaire);
	     	console.log("this.state.gitHub = " + this.state.gitHub);
	     	this.loadGithub(this.state.gitHub);
	     	}) 
	     .catch(err => console.log(err));
	}; 

	loadGithub = (gitHub) => {
		API.getGithubProjects(gitHub)
		  .then(res =>
	       this.setState({ 
	   			githubProjects: res.data //this is an ARRAY of OBEJCTS
	       	})
		  )
		  .then(() => {// MUST MAKE THIS A FUNCTION that renders a FUNCTION >>> by making this a function in a PROMISE chain, it will NOT PROCESS until the promise BEFORE IT has rendered its result!!! :)
	     	console.log("this.state.githubProjects = " + this.state.githubProjects);
	     	API.saveProjects({
        		projects: this.state.githubProjects
        	})
	       })
	      .catch(err => console.log(err));
	};

	deleteProject = Project_id => {
	    API.deleteProject(Project_id)
	      .then(res => this.loadBooks())
	      .catch(err => console.log(err));
	};


	displayProjectLanguages = (project) => {
	  	if(project.languages_url.length) {
			for(let language of project.languages_url) {
			    return language + " ";
			}
		};
	}


  render() {
    return (
      <Container fluid>
      <br/>

        <Row>
          <Col size="md-12">
            <Jumbotron className="img-responsive">
              <h3 className="text-center">Check out your projects!</h3>
              <h5 className="text-center">What will you build today?</h5>

	            {this.state.githubProjects.length ? (
	              <div className="text-center">
                	{this.state.githubProjects.map(project => (                      
		              <main key={project._id}>


		                <Col m={3} s={6} size="md-3">
		                	<Card header={<CardTitle reveal image={project.html_url} waves='light'/>}
								title={project.html_url}
								reveal={
									<div>
										<p>Description: {project.description}</p>
										<p>Languages Used: {this.displayProjectLanguages(project)}</p>
			                            <p>Lasted Updated: {moment(project.updated_at, "YYYY-MM-DD HH:mm Z").format("MM-DD-YYYY")}</p>
		                            </div>
								}>
								<Link to={"/project/" + project.name} target="_blank">	  	
							       	<p>Review and Comment on this project.</p>
							    </Link>								
							</Card>
		                </Col>


		              </main>
	                ))}
	              </div>
	            ) : (
	              <h3 className="text-center">No repositories available Today.
	              </h3>
	            )}
            </Jumbotron>

          </Col>
        </Row>

      </Container>
    );
  }
}


export default ProjectBoard;

//linking to a separate page "which addes a /project/ + the name of the project (repo on github)", that will load this particular project's info.


		         //        <Col m={4} s={12} size="m-4 s-12">


		         //            <div className="card sticky-action">
		         //                <div className="card-image waves-effect waves-block waves-light">
		         //                    <iframe src={project.html_url} height="200px" width="200px"></iframe>
		         //                </div>
		         //                <div className="card-action">
		         //                    <span className="card-title activator grey-text text-darken-4 text-center">
			        //                 <h4><strong>Repo Name: </strong>
				       //            		<Link to={"/project/" + project.name} target="_blank">	  	
							    //            	<strong className="projectName">{project.name}</strong>
							    //        	</Link>
								  	// </h4><i className="material-icons right">more_vert</i></span>
			        //                 <p><a target="_blank" href={project.html_url}>See Code</a></p>
		         //                </div>
		         //                <div className="card-reveal">
		         //                    <span className="card-title grey-text text-darken-4 text-center">{project.name}<i class="material-icons right">close</i></span>
		         //                    <p>Description: {project.description}</p>
		         //                    <p>Languages Used: {this.displayProjectLanguages(project)}</p>
		         //                    <p>Lasted Updated: {moment(project.updated_at, "YYYY-MM-DD HH:mm Z").format("MM-DD-YYYY")}</p>
		         //                </div>
		         //            </div>
		         //        </Col>


