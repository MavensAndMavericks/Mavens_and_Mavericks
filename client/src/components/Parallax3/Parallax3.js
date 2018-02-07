import React from "react";
import "./Parallax3.css";
import { Col, Row, Container } from "../Grid";
import Jumbotron from "../Jumbotron";

const Parallax3 = () =>
	<Row className="container">
    	<Col size="md-12" className="container" >

          <br />
          <br />
          <br />

		    <div className="parallax3 conatiner" data-type="content" style={{backgroundImage:"url(/assets/gears-Background.jpeg)"}}>
		    	<div style={{backgroundColor:"#FFFFFF", opacity:".75", zIndex:"3", marginBottom:"50px"}}>
		    		<h2 className="header">Questions and Answers!</h2>
		    	</div>

			 <Container fluid style={{ marginBottom: "200px" }}>				
	          <br/>

		        <Row>
		            <Col size="md-12">
		              <Jumbotron className="img-responsive" style={{ backgroundColor: "#672188" }}>
		                <div class="card horizontal">
		                  <div class="card-stacked">
		                    <div class="card-content">
		                        <h3 className="text-center black-text">Q: How am I matched with mentors?</h3>
		                        <hr/>
		                        <h5 className="black-text">A: Mentorship must be both an offering of knowledge as well as an extension of one's passion. 
		                         We always ensure that your mentor has more career experience and is qualified to mentor you at your specific career level.  
		                         Next, we consider your language and career industry interests.  We also go a level beyond, and allow you to choose your mentor based on personality.  
		                         Each mentor and mentee are required to offer personal professional reamarks and a quote, which sheds light into their outlook and interests. 
		                         Successful mentorship results in a friendship and an impact that extend across multiple communities and generations.  The alignment of both professional expereience and personality are key.</h5>
		                    </div>
		                  </div>
		                </div>
		              </Jumbotron>
		            </Col>
		            <Col size="md-12">
		              <Jumbotron className="img-responsive" style={{ backgroundColor: "#672188" }}>
		                <div class="card horizontal">
		                  <div class="card-stacked">
		                    <div class="card-content">
		                        <h3 className="text-center black-text">Q: What are the qualifications for a Maven (a mentor)?</h3>
		                        <hr/>
		                        <h5 className="black-text">A: We encourage mentorship at all levels of an individual's professional journey as we believe connection with leaderhip can only helps heighten and expediate one's learning.
		                          Therefore, our most significant requirement for mentors is that they prove a higher level of knowledge and professional expereience than their mentees, and have a heart for collabortive learning.</h5>
		                    </div>
		                  </div>
		                </div>
		                <br/>
	          			<br />
		              </Jumbotron>
		            </Col>
		        </Row>
		        <br />
		      	<br />

	          </Container>
	  		</div>

		</Col>
  </Row>

export default Parallax3;

//animated fadeIn >> add these into the className to make the background pic FADE IN...! !