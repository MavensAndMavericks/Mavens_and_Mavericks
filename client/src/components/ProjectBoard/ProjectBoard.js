//React Libary Imports
//=============================
import { Component } from "react";
import { Link } from "react-router-dom";

//API Routing Import:
//=============================
import API from "../../utils/API";

//Componenet imports:
//=============================
import "./ProjectBoard.css";
import { Col, Row } from "../Grid";

//=================================================================================
class ProjectBoard extends Component {
	state = {
		questionnaire: null,
		github: "",
		githubProjects: [],
		id: ""
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
	     	console.log("this.state.gitHub = " + this.state.gitHub);
	     	this.loadGithub(ithis.state.gitHub);
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
	       )
	      .catch(err => console.log(err));
	};

	 deleteProject = Project_id => {
	    API.deleteProject(Project_id)
	      .then(res => this.loadBooks())
	      .catch(err => console.log(err));
	};  


  render() {
    return (
      <Container fluid>
      <br/>

        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">Welcome to Maverns and Mavericks!</h1>
            </Jumbotron>
            <Parallax1/>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">Why have a mentor?</h1>

	            {this.state.githubProjects.length ? (
	              <div className="text-center">
                	{this.state.githubProjects.map(project => (                      
		              <main key={project._id}>

		      				// -- Start Card -->
		                <Col size="m-4">
		                    <div className="card sticky-action">
		                        <div className="card-image waves-effect waves-block waves-light">
		                            <img className="activator" src=""/>
		                        </div>
		                        <div className="card-action">
		                            <span className="card-title activator grey-text text-darken-4 text-center">
			                        <h4><strong>Repo Name: </strong>
				                  		<Link to={"/project/" + project.name} target="_blank">  //linking to a separate page "which addes a /project/ + the name of the project (repo on github)", that will load this particular project's info.	  	
							               	<strong className="projectName">{project.name}</strong>
							           	</Link>
								  	</h4><i className="material-icons right">more_vert</i></span>
			                        <p><a target="_blank" href={project.html_url}>See Code</a></p>
		                        </div>
		                        <div className="card-reveal">
		                            <span className="card-title grey-text text-darken-4 text-center">{project.name}<i class="material-icons right">close</i></span>
		                            <p>Description: {project.description}</p>
		                            <p>Languages Used: {
		                            	if(project.languages_url.length>0) {;
		                            		for(language of project.languages_url) {
		                            			return language + " "
		                            		}
		                            	};
		                            }</p>
		                            <p>Lasted Updated: {moment(project.updated_at, "YYYY-MM-DD HH:mm Z", "MM-DD-YYYY")}</p>
		                        </div>
		                    </div>
		                </Col>
                			// -- End Card -->

		              </main>
	                ))}
	              </div>
	            ) : (
	              <h3 className="text-center">No Results to Display</h3>
	            )}
            </Jumbotron>

          </Col>
        </Row>

      </Container>
    );
  }
}


export default ProjectBoard;