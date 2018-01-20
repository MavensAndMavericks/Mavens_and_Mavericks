
// import React, { Component } from "react";

// import * as $ from 'jquery';



//Dependency import:
import {Carousel} from "react-materialize";


import React, { Component } from "react";

import * as $ from 'jquery';

//Componenet imports:
import "./SlideShow.css";
//import Parallax1 from "../Parallax1";

//=================================================================================


//!! WHY does't the duration work?? //doesn't prompt next slide... ever.


class SlideShow extends Component {

  componentDidMount() {

 // $('.carousel').carousel();
  }

  render() {
    return (
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
    );
  }
}

export default SlideShow;