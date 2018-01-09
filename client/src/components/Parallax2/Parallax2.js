import React from "react";
import "./Parallax2.css";
import { Col, Row } from "../Grid";

const Parallax2 = () =>
	<Row className="container">
    	<Col size="md-12" className="container" >

    		<div className="parallax4 conatiner" data-type="content" style={{backgroundImage:"url(/assets/Mini-Robot-Duo.jpeg)"}}>
		    	<div style={{backgroundColor:"#FFFFFF", opacity:".75", zIndex:"3"}}>
		    		<h2 className="header">What defines a Mentor?</h2>
		    	</div>
		    </div>

		</Col>
   	</Row>

export default Parallax2;

//animated fadeIn >> add these into the className to make the background pic FADE IN...! !