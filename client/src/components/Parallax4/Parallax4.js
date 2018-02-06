import React from "react";
import "./Parallax4.css";
import { Col, Row } from "../Grid";

const Parallax4 = () =>
<div>
	<div className = "row">
	    <div className="parallax4 conatiner" data-type="content" style={{backgroundImage:"url(/assets/music-tech.jpeg)"}}>
	    	<div style={{backgroundColor:"#FFFFFF", opacity:".75", zIndex:"3"}}>
	    		<h2 className="header">Testimonials</h2>		 
	   		</div>
		  
			<div className = "row">
			    <div className ="col s12 m6 push-l2">
			    	<img className="responsive-img testimonial" src="/assets/testimonial2.png" alt="testimonial" width="400px" height="300px"/>
				</div>
				<div className ="col s12 m6">
					<img className="responsive-img testimonial" src="/assets/testimonial1.png" alt="testimonial" width="400px" height="300px"/>
				</div>
			</div>

			<div className = "row">
				<div className ="col s12 m6 push-l2">
				    <img className="responsive-img testimonial" src="/assets/testimonial3.png" alt="testimonial" width="400px" height="300px"/>
				</div>
				<div className ="col s12 m6">
				    <img className="responsive-img testimonial" src="/assets/testimonial4.png" alt="testimonial" width="400px" height="300px"/>
				</div>
			</div>
		</div>    
	</div>
</div>



export default Parallax4;

//animated fadeIn >> add these into the className to make the background pic FADE IN...! !
//** /assets/mentorImage2.png USE THIS on the Front Page somewhere (slideshow somehwere??)