//React:
import React, { Component } from "react";

import {Carousel} from "react-materialize";

// import * as $ from 'jquery';

import "./SlideShow.css";

//================================================================================






class SlideShow extends Component {

  componentDidMount() {

    setInterval()
  }



render(){
  return (
  <div>
      <Carousel
        className="carousel"
        fixedItem={<a href="/aboutus" className='btn'>What Can a Mentor Do for You?</a>}
        options={{ fullWidth: true, indicators: true, duration: 200 }}
        images={[
          "/assets/paired-Programming-fancy.jpg",
          "/assets/group-Learning-girl.jpeg",
          "/assets/pair-Excitement.jpeg"
        ]}
      />        
  </div>
		);
	}
}
	
export default SlideShow;

//!! WHY does't the duration work?? //doesn't prompt next slide... ever.
