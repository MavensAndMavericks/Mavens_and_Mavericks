//React Library import:
//=============================
import React, { Component } from "react";
import "./WelcomeMsg.css";

//=================================================================================
//onLoad="Materialize.showStaggeredList('.staggered-text')"
class WelcomeMsg extends Component {

	TxtRotate = (element, toRotate, period)  => {
	  this.toRotate = toRotate;
	  this.element = element;
	  this.loopNum = 0;
	  this.period = parseInt(period, 10) || 2000;
	  this.txt = '';
	  this.isDeleting = false;

	  this.tick = () => {
		  var i = this.loopNum % this.toRotate.length;
		  var fullTxt = this.toRotate[i];

		  if (this.isDeleting) {
		    this.txt = fullTxt.substring(0, this.txt.length - 1);
		  } else {
		    this.txt = fullTxt.substring(0, this.txt.length + 1);
		  }

		  this.element.innerHTML = '<span className="wrap">'+this.txt+'</span>';

		  var that = this;
		  var delta = 300 - Math.random() * 100;

		  if (this.isDeleting) { delta /= 2; }

		  if (!this.isDeleting && this.txt === fullTxt) {
		    delta = this.period;
		    this.isDeleting = true;
		  } else if (this.isDeleting && this.txt === '') {
		    this.isDeleting = false;
		    this.loopNum++;
		    delta = 500;
		  }

		  setTimeout(function() {
		    that.tick();
		  }, delta);
	  };
	  this.tick();
	}


	componentDidMount() {
	 	var elements = document.getElementsByClassName('txtRotate');
		  
		for (var i=0; i<elements.length; i++) {
		    var toRotate = elements[i].getAttribute('datarotate');
		    var period = elements[i].getAttribute('dataperiod');
		    if (toRotate) {
		      new this.TxtRotate(elements[i], JSON.parse(toRotate), period);
	   		}
		};
	};

	render() {
		return(
		  <div className="welcome-msg"> 
		    <h2>Welcome to   
		    	<span 
		    		className="txtRotate"
				    dataperiod="3000"
				    datarotate='[ " your Future!", " meaningful impact.", " supportive learning.", " industry insight.", " lifetime legacy." ]'>
			    </span>
			</h2>

		    <hr style={{color:"#3e3f3a"}}/>
		  </div>
		);
	}
}

export default WelcomeMsg;

