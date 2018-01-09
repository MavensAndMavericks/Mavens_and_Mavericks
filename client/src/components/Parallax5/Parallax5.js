import React from "react";
import "./Parallax5.css";
import { Col, Row } from "../Grid";

const Parallax5 = () =>
	<Row className="container">
    	<Col size="md-12" className="container" >

		    <div className="parallax4 conatiner" data-type="content" style={{backgroundImage:"url(/assets/business-Walking-Together.jpeg)"}}>
		    	<div style={{backgroundColor:"#FFFFFF", opacity:".75", zIndex:"3"}}>
		    		<h2 className="header">Who We Are</h2>
		    	</div>
		    </div>

		</Col>
   	</Row>

export default Parallax5;

//animated fadeIn >> add these into the className to make the background pic FADE IN...! !
// 2nd Option for pic: url(/assets/group-Learning-girl.jpeg)"
// 3rd Option for pic: url(/assets/pair-Excitement.jpeg)
// 4th Option for pic: url(paired-Programming-fancy,jpg)

//** /assets/mentorImage2.png USE THIS on the Front Page somewhere (slideshow somehwere??)