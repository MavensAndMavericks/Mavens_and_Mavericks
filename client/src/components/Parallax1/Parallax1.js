import React from "react";
import WelcomeMsg from "../WelcomeMsg";
import "./Parallax1.css";


//onLoad="Materialize.fadeInImage(.parallax1')";

const Parallax1 = () =>
	<div>
	    <div className="parallax1" data-type="content" style={{backgroundImage:"url(/assets/open-Eyes-pic.jpeg)", height:"1500px"}}>
	    	<WelcomeMsg/>
	    </div>
	</div>

export default Parallax1;
