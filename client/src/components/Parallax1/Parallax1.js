import React from "react";
import WelcomeMsg from "../WelcomeMsg";
import "./Parallax1.css";

const Parallax1 = () =>
	<div>
	    <div className="parallax1 " data-type="content" style={{backgroundImage:"url(/assets/open-Eyes-pic.jpeg)"}}>
	    	<WelcomeMsg/>
	    </div>
	</div>

export default Parallax1;

//animated fadeIn >> add these into the className to make the background pic FADE IN...! !