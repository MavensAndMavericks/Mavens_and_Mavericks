

import {Slider} from "react-materialize";


import React, { Component } from "react";


//Componenet imports:
import "./SlideShow.css";

//=================================================================================

const SlideShow = () =>
  <div>
      <Slider
        className="slider"
        fixedItem={<a href="/mentorsarekey" className='btn'>What Can a Mentor Do for You?</a>} //aboutus
        options={{ fullWidth: true, indicators: true, duration: 200 }} 
        images={[
          "/assets/paired-Programming-fancy.jpg",
          "/assets/group-Learning-girl.jpeg",
          "/assets/pair-Excitement.jpeg"
        ]}
      />
      </div>




export default SlideShow;