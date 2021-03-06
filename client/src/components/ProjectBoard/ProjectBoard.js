//React Libary Imports
//=============================
import React, { Component } from "react";
import { Link } from "react-router-dom";

//API Routing Import:
//=============================
import API from "../../utils/API";

//External (/Dependency) Import:
//=============================
import * as moment from "moment";
import * as Chart from "chart.js";
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
		const id = this.props.id; //does this need to be "this.props._id" >> ie: with the underscore?!?!?!
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
	     	console.log("this.state.questionnaire : (see below)");

             console.log(this.state.questionnaire);
             console.log("this.state.gitHub = (see below)");
             console.log(this.state.github);
             this.loadGithub(this.state.github); //this.state.gitHub
             // console.log(this.state.gitHub);
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
	     	console.log(this.state.githubProjects[0]);
	     	console.log(this.state.githubProjects.length);

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

	// {this.displayProjectLanguages(project.name)}
	displayProjectLanguages = (projectName) => {
		API.getProjectLanguages(this.state.github, projectName)
	     .then(res => {
	     	const projectLang = res.data;
		  	console.log("projectLang = " + projectLang);

			if(projectLang.length) {
				let langArray = [];
				for(let language of projectLang) {
				    langArray.push(language + " ");
				}
				console.log("language Array for proejct = " + langArray);
				return langArray;
			}
	     })
	     .catch(err => console.log(err));
	};

	// {this.displayProjectLanguages(project.name)}
	displayProjectStats = (project) => {
		var projectName = project.name;

		API.getProjectStats(this.state.github, projectName)
		.then(res => {
	     	const projectStats = res.data;
		  	console.log("projectStats = ...see below"); 
		  	console.log(projectStats); ///an Array of objects (wth totals included...)

		  	const projectCommitData = projectStats.map(commits => commits.total);
		  	console.log("projectCommitData = " + projectCommitData); //an Array of numbers

			let ctx = document.getElementById(project.id).getContext('2d');
			var chart = new Chart(ctx, {
			    type: 'horizontalBar',
			    data: {
			        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
			        datasets: [{
			            label: '# of Commits/Month',
			            data: projectCommitData,
			            backgroundColor: [
			                'rgba(255, 99, 132, 0.2)',
			                'rgba(54, 162, 235, 0.2)',
			                'rgba(255, 206, 86, 0.2)',
			                'rgba(75, 192, 192, 0.2)',
			                'rgba(153, 102, 255, 0.2)',
			                'rgba(255, 159, 64, 0.2)',
			                'rgba(255, 99, 132, 0.2)',
			                'rgba(54, 162, 235, 0.2)',
			                'rgba(255, 206, 86, 0.2)',
			                'rgba(75, 192, 192, 0.2)',
			                'rgba(153, 102, 255, 0.2)',
			                'rgba(255, 159, 64, 0.2)'
			            ],
			            borderColor: [
			                'rgba(255,99,132,1)',
			                'rgba(54, 162, 235, 1)',
			                'rgba(255, 206, 86, 1)',
			                'rgba(75, 192, 192, 1)',
			                'rgba(153, 102, 255, 1)',
			                'rgba(255, 159, 64, 1)',
			                'rgba(255,99,132,1)',
			                'rgba(54, 162, 235, 1)',
			                'rgba(255, 206, 86, 1)',
			                'rgba(75, 192, 192, 1)',
			                'rgba(153, 102, 255, 1)',
			                'rgba(255, 159, 64, 1)'
			            ],
			            borderWidth: 1
			        }]
			    },
			    options: {
			        scales: {
			            yAxes: [{
			                type: 'category',
			                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
			            }]
			        }
			    }
			});
	    })
	   	.catch(err => console.log(err));
	};


  render() {
    return (
      <Container fluid>
      <br/>

        <Row>
          <Col size="md-12">
            <Jumbotron className="img-responsive">
              <h3 className="text-center">Check out your projects!</h3>
              <h5 className="text-center">What will you build today?</h5>
              <br/>
              <br/>

	            {this.state.githubProjects.length ? (
	              <div className="text-center">
                	{this.state.githubProjects.map(project => (                      
		              <main key={project._id}>
		                <Col size="s-4">
		                	  <div className="card horizontal">
							    <div className="card-image waves-effect waves-block waves-light">
							   	  <canvas id={project.id} width="400%" height="200">{this.displayProjectStats(project)}</canvas>
							    </div>

							    <div class="card-stacked">
								    <div className="card-content">
								      <br/>

								      <span className="card-title activator grey-text text-darken-4"><h3>{project.name}</h3><i className="material-icons right">more_vert</i></span>
								      <Link to={project.html_url} target="_blank">	  	
								      		<h5><strong>Review and Comment on this project.</strong></h5>
								      </Link>	
								    </div>
								</div>
							    <div className="card-reveal">
							      <span className="card-title grey-text text-darken-4" style={{color:"#01010a"}}><h5>{project.name}</h5><i className="material-icons right">close</i></span>
							      <hr/>
							      <h6 style={{color:"#01010a"}}>Description: {project.description !== null ? project.description : "None."}</h6>
								  <h6 style={{color:"#01010a"}}>Principle Language Used: {project.language !== null ? project.language : "None."} </h6>
	                              <p style={{color:"#01010a"}}>Lasted Updated: {moment(project.updated_at, "YYYY-MM-DD HH:mm Z").format("MM-DD-YYYY")}</p>
							    </div>
							  </div>
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
		    ///////////////////////////////////////////////////////////////////////////////
		                {/*<Col m={4} s={12} size="m-4 s-12">*/}


		                    {/*<div className="card sticky-action">*/}
		                        {/*<div className="card-image waves-effect waves-block waves-light">*/}
		                            {/*<iframe src={project.html_url} height="200px" width="200px"></iframe>*/}
		                        // </div>

		                        {/*<div className="card-action">*/}
		                            {/*<span className="card-title activator grey-text text-darken-4 text-center">*/}
			                        {/*<h4><strong>Repo Name: </strong>*/}
				                  		{/*<Link to={"/project/" + project.name} target="_blank">	  	*/}
							               	{/*<strong className="projectName">{project.name}</strong>*/}
							           	// </Link>
								  	// </h4><i className="material-icons right">more_vert</i></span>
			                        {/*<p><a target="_blank" href={project.html_url}>See Code</a></p>*/}
		                        // </div>

		                //         <div className="card-reveal">
		                //             <span className="card-title grey-text text-darken-4 text-center">{project.name}<i class="material-icons right">close</i></span>
		                //             <p>Description: {project.description}</p>
		                //             <p>Languages Used: {this.displayProjectLanguages(project)}</p>
		                //             <p>Lasted Updated: {moment(project.updated_at, "YYYY-MM-DD HH:mm Z").format("MM-DD-YYYY")}</p>
		                //         </div>
		                //     </div>
		                // </Col>


{/*                                <Jumbotron className = "jumbotron"> 
                                   <h2> Your Matches </h2> 
                                   <br/>
                                    {this.state.matches.length ? ( 
                                        <div className = "text-center" > {
                                            this.state.matches.map(match => ( 
                                           
                                                <main key = { match._id }>
                                                    <div class="card horizontal">
                                                        <div class="card-image">
                                                            <img className="img-responsive" id="matchAvatar" src={match.githubAvatar} alt="Github Profile Pic"/>
                                                        </div>
                                                        <div class="card-stacked">
                                                            <div class="card-content">
                                                                <h2 id="yourMatches">{ match.firstName } { match.lastName }</h2>
                                                                <p class="cardFont grey-text">
                                                                    <strong> Github Handler: </strong>
                                                                    <Link to = { "https://github.com/" + match.gitHub } target = "_blank" >
                                                                       <strong className = "githubHandler" > { match.gitHub } </strong>
                                                                    </Link> 
                                                                    <br/>
                                                                    Industries of Interest: { match.industryExperience.join(", ") }
                                                                    <br/> 
                                                                    Languages: { match.languages.join(", ") } 
                                                                    <br/>
                                                                    Reason for Mentorship: { match.impact } 
                                                                    </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </main> 
                                                ))
                                            }          
                                        </div>
                                        ) : ( 
                                            <h3 className = "text-center" > No Results to Display </h3>
                                        )
                                    }
                                </Jumbotron>*/}