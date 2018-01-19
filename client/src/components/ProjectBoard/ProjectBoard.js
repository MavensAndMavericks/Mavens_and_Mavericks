import React, { Component } from "react";
import "./ProjectBoard.css";
import { Col, Row } from "../Grid";

class ProjectBoard extends Component {
	// state = {
	// 	questionnaire: [],
	// 	gitHub: ""
	// };

	// componentDidMount() {;
	//     this.loadGithub(gitHub);
	// };


	// loadQuestionnaire = (gitHub) => {
	//    API.getGithub(gitHub)
	//      .then(res =>
	//        this.setState({ 
	//        	gitHub: res.data,
	//     	})
	//      )
	//      .catch(err => console.log(err));
	// };


	render() {
		return(
			<Row className="container">
		    	<Col size="md-12" className="project-board" >
		    		<div style={{backgroundColor:"white"}}>
		    			<h3 className="text-center">ProjectBoard</h3>

		    		</div>

				</Col>
		   	</Row>
		);
	}
}


export default ProjectBoard;