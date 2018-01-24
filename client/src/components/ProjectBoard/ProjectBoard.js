//React Libary Imports
//=============================
import { Component } from "react"; //react

//API Routing Import:
//=============================
//import API from "../../utils/API";

//Componenet imports:
//=============================
import "./ProjectBoard.css";
//import { Col, Row } from "../Grid";

//=================================================================================
class ProjectBoard extends Component {
	state = {
		questionnaire: null,
		github: "",
		githubProjects: []
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
	       	questionnaire:res.data,
	       	github: res.data.gitHub
	       })
	     )
	     .then(() => {// MUST MAKE THIS A FUNCTION that renders a FUNCTION >>> by making this a function in a PROMISE chain, it will NOT PROCESS until the promise BEFORE IT has rendered its result!!! :)
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
            </Jumbotron>
            

            {this.state.githubProjects.length ? (
              <List className="text-center">
                {this.state.githubProjects.map(project => (
                  <ListItem key={project._id}>
                    <Link to={"/project/" + project._id}>//linking to a separate page that will load this particular project's info.
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(project._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3 className="text-center">No Results to Display</h3>
            )}

          </Col>
        </Row>

      </Container>
    );
  }
}


export default ProjectBoard;