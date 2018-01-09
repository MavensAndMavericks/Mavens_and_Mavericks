import React from "react";
import "./Parallax4.css";
import { Col, Row } from "../Grid";

const Parallax4 = () =>
	<Row className="container">
    	<Col size="md-12" className="container" >

		    <div className="parallax4 conatiner" data-type="content" style={{backgroundImage:"url(/assets/music-tech.jpeg)"}}>
		    	<div style={{backgroundColor:"#FFFFFF", opacity:".75", zIndex:"3"}}>
		    		<h2 className="header">Example Projects</h2>
		    	</div>
		    </div>

		</Col>
   	</Row>

export default Parallax4;

//animated fadeIn >> add these into the className to make the background pic FADE IN...! !
//** /assets/mentorImage2.png USE THIS on the Front Page somewhere (slideshow somehwere??)