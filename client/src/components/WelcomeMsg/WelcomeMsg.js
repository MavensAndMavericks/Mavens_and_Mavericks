//React Library import:
//=============================
import React from "react";
import "./WelcomeMsg.css";

//=================================================================================
//onLoad="Materialize.showStaggeredList('.staggered-text')"
const WelcomeMsg = () =>
	  <div className="welcome-msg"> 
	    <h1>Welcome to your Future!</h1>
	    <hr/>
	    <p className="text-center">BLAH. Text Goes Here.</p>
	    <a href="/books" className="btn btn-default btn-xl" style={{margin: "0 auto"}}>I don't like the center...</a>  
	  </div>;

export default WelcomeMsg;

// Add this in belwo the <p> tag if wish to keep inside the WelcomeMsg Component: <a href="/books" className="btn btn-default btn-xl">Go To Books</a>