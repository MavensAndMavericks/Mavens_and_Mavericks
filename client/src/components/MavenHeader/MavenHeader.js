//React Library import:
//=============================
import React, { Component } from "react";

//API Routing Import:
//=============================
import API from "../../utils/API";

//Componenet imports:
//=============================
import "./MavenHeader.css";

//=================================================================================
class MavenHeader extends Component {

	constructor(props) {
	    super(props);
	    console.log("Nav2 props = (see below)");  
		console.log(this.props);
	}

	state = {
		questionnaire: null,
		gitHub: "",
		firstName: "",
		lastName: ""
	};

	componentDidMount() {
		const type = this.props.type;
		console.log("type = " + type);

	    const id = this.props.id;
	    console.log("id = " + id);

	    this.loadQuestionnaire(id);
	}

	loadQuestionnaire = (id) => {
	   API.getQuestionnaire(id)
	     .then(res =>
	       this.setState({ 
	       	questionnaire: res.data,
	       	firstName: res.data.firstName,
	       	lastName: res.data.lastName,
	       	gitHub: res.data.gitHub
	       })
	     )
	     .catch(err => console.log(err));
	}; 


	render() {
    	return(
		  <div className="nav-header-maven"> 
		    <h3> Welcome Back {this.state.gitHub}</h3>
		  </div>
    	);
  	}
}

export default MavenHeader;
