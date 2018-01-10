//React:
import React from "react";

//Dependency import:
import {Carousel} from "react-materialize";

//Componenet imports:
import "./SlideShow.css";
//import Parallax1 from "../Parallax1";

//=================================================================================
const SlideShow = () =>
  <div>
      <Carousel
        className="slide-show"
        fixedItem={<a href="/aboutus" className='btn'>What Can a Mentor Do for You?</a>}
        options={{ fullWidth: true, indicators: true, duration: 200 }} 
        images={[
          "/assets/paired-Programming-fancy.jpg",
          "/assets/group-Learning-girl.jpeg",
          "/assets/pair-Excitement.jpeg"
        ]}
      />        
  </div>

export default SlideShow;

//!! WHY does't the duration work?? //doesn't prompt next slide... ever.
