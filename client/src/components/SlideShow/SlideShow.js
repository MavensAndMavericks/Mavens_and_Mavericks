///React Library imports:
//=============================
import { Carousel } from "react-materialize"; //Slider, Slide,
import React from "react";

//Componenet imports:
//=============================
import "./SlideShow.css";

//=================================================================================

const SlideShow = () =>
  <div>
      <Carousel
        className="slide-show"
        fixedItem={<a href="/aboutus" className='btn'>What Can a Mentor Do for You?</a>}
        options={{ fullWidth: true }} 
        images={[
          "/assets/paired-Programming-fancy.jpg"
        ]}
      />        
  </div>

export default SlideShow;


//slideshwo: indicators: true, duration: 200

//   <Carousel options={{ fullWidth: true }}>
// 	<Slider >
// 		<Slide
// 			src="/assets/paired-Programming-fancy.jpg"
	
// 			title="Discover the difference a Mentor can make."
// 			placement="center"> 
// 			<a className="btn btn-lg btn-primary" href="/mentorsarekey">What can a mentor do for you?</a>
// 		</Slide>

// 		<Slide
// 			src="/assets/group-Learning-girl.jpeg" 
// 			title='"Mentorship is an incredibly huge responsibility. There has to be trust there on a very deep level"'
// 			placement="left"> {/*left aligned Caption*/}
// 			Jimmy Chin
// 		</Slide>

// 		<Slide
// 			src="/assets/pair-Excitement.jpeg" 
// 			title='"Mentors are by far the most important aspects of businesses."'
// 			placement="right"> {/*right aligned Caption*/}
// 			Daymond John
// 		</Slide>
// 	</Slider>
//  </Carousel>


// export default SlideShow;

{/*options={{fullWidth:true, indicators:true}} */}	


