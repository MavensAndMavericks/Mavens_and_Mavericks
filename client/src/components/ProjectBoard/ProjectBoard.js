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
		questionnaire: [],
		github: "",
		githubProjects: []
	};

	// componentDidMount() {;
	//     console.log("Pathname = " + window.location.pathname);
	//     const url = window.location.pathname;
	//     const id = url.split("/")[3];
	//     console.log("id = " + id);

	//     this.loadQuestionnaire(id);
	// };


	// loadQuestionnaire = (id) => {
	//    API.getQuestionnaire(id)
	//      .then(res =>
	//        this.setState({ 
	//        	questionnaire: res.data,
	//        	gitHub: res.data.gitHub
	//        })
	//      )
	//      .then(() => this.loadGithub(this.state.gitHub))
	//      .catch(err => console.log(err));
	// };

	// loadGithub = (github) => {
	// 	API.getGithub(github)
	// 	  .then(res =>
	//        this.setState({ 
	//        	   githubProjects: res.data
	//         })
	//       )
	//       .catch(err => console.log(err));
	// }


	render() {
		return null;
		// return(
		// 	<Row className="container">
		//     	<Col size="md-12" className="project-board" >
		//     		<div style={{backgroundColor:"white"}}>
		//     			<h3 className="text-center">ProjectBoard</h3>
		//     			<div>
		// 					{this.state.githubProjects}
		//     			</div>

		//     		</div>

		// 		</Col>
		//    	</Row>
		// );
	}
}


export default ProjectBoard;