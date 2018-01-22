

import {Slider, Slide} from "react-materialize";


import React, { Component } from "react";


//Componenet imports:
import "./SlideShow.css";

//=================================================================================

const SlideShow = () =>
  <div>
      {/* <Slider
        className="slider"
        fixedItem={<a href="/mentorsarekey" className='btn'>What Can a Mentor Do for You?</a>} //aboutus
        options={{ fullWidth: true, indicators: true, duration: 200 }} 
        images={[
          "/assets/paired-Programming-fancy.jpg",
          "/assets/group-Learning-girl.jpeg",
          "/assets/pair-Excitement.jpeg"
        ]}
      /> */}

<Slider
style={{height:"600px"}}>

// fixedItem={<a href="/mentorsarekey" className='btn'>What Can a Mentor Do for You?</a>} >
	<Slide

		src="/assets/paired-Programming-fancy.jpg">
		{/* // title="This is our big Tagline!"> */}
		{/* // Here's our small slogan. */}
	</Slide>
	<Slide

		src="/assets/group-Learning-girl.jpeg">
		{/* // title="Left aligned Caption" */}
		{/* // placement="left" */}
		{/* Here's our small slogan. */}
	</Slide>
	<Slide
  
		src="/assets/pair-Excitement.jpeg">
		{/* title="Right aligned Caption"
		placement="right">
		Here's our small slogan. */}
	</Slide>
</Slider>
      </div>




export default SlideShow;