//React Library imports:
//=============================
import React from "react";


//Componenet imports:
//=============================
//import WelcomeMsg from "../WelcomeMsg";
import "./Parallax1b.css";
import { Col, Row } from "../Grid";

const Parallax1b = () =>
	<div>
	    <div className="parallax1b" data-type="content" style={{backgroundImage:"url(/assets/vr-Action.jpeg)"}}>
	    	<Row /> {/*row-offset-19*/}
	    	<Row/>
	    	<Row/>
	    	<Row/>
	    	<Row/>
	    	<Row/>
	    	<Row/>
	    	<Row/>
			<Row/>
	    	<Row/>
	    	<Row/>
	    	<Row/>
	    	<Row/>
	    	<Row/>
	    	<Row/>
	    	<Row/>
	    	<Row/>
	    	<Row/>
	    	<Row/>
	    	<Row/>
	    	<Row/>
	    	<Row/>
	    	<Row/>
	    	
	    	<br/>
	    	<Row>
	    		<Col size="sm-7"/>
	    		<Col size="sm-5">
		    		<h4 style={{color: "white"}}>What are you capable of?</h4>
		    		<a className="btn btn-lg btn-primary" href="/QandA">Learn More</a>
	    		</Col>
	    	</Row>
	    </div>   

	</div>

export default Parallax1b;

//animated fadeIn >> add these into the className to make the background pic FADE IN...! !