import React, {Component} from "react";
import Dropdown from "../Dropdown";
import MavenHeader from "../MavenHeader";

import "./Nav2.css";

//import NavHeader from "../NavHeader";
//import OAuthBtn from "../OAuthBtn"; //OAuth WAS located as a button on the Nav.
//import Signup from "../Signup";

class Nav2 extends Component {

	constructor(props) {
	    super(props);
	    console.log("Nav2 props = (see below)");  
		console.log(this.props);
	}

	render() {
    	return(
		  <nav className="navbar navbar-default navbar-fixed-top" style={{padding: "50px", zIndex: 1}}>
		    <div className="container-fluid">

		      <a href="/" className="navbar-brand">
		        <img src="/favicon.png" alt="Mavens and Mavericks Logo" style={{width:"100px", height:"75px"}} />
		      </a>
		       
		       <div>{this.props.children}</div>

			  <MavenHeader id={this.props.id} type={this.props.type}/>
		      <Dropdown/>
		      
		    </div>
		  </nav>
    	);
  	}
}

export default Nav2;