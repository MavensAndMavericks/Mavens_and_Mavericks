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
		    	<div style={{backgroundColor:"#FFFFFF", opacity:".75", zIndex:"3"}}>
		    		<h2 className="header">Questions and Answers!</h2>
		    	</div>
		    </div>

			 <Container fluid style={{ marginBottom: "100px" }}>				
	          <br/>
	          <br />
	          <br />
	          <br />
	          <br />

		        <Row>
		            <Col size="md-6">
		              <Jumbotron className="img-responsive">
		                <div class="card horizontal">
		                  <div class="card-stacked">
		                    <div class="card-content">
		                      <div id="austin">
		                        <h3 className="text-center black-text">Q: How am I matched with mentors?</h3>
		                        <hr/>
		                        <h6 className="black-text">A: Mentorship must be both an offering of knowledge as well as an extension of one's passion. 
		                         We always ensure that your mentor has more career experience and is qualified to mentor you at your specific career level.  
		                         Secondly, we consider your language and career industry interests.  We also go a level beyond, and allow you to choose your mentor based on personality.  
		                         Each mentor and mentee are required to offer personal professional reamarks and a quote, that shed light into their outlook and interest. 
		                         Successful mentorship results in a freinship and an impact that extend over generations.  The alignment of both professional expereience and personality are key.</h6>
		                      </div>
		                    </div>
		                  </div>
		                </div>
		              </Jumbotron>
		            </Col>

		            <Col size="md-6">
		              <Jumbotron className="img-responsive">
		                <div class="card horizontal">
		                  <div class="card-stacked">
		                    <div class="card-content">
		                      <div id="amanda">
		                        <h3 className="text-center black-text">Q: What are the qualifications for a Maven (a mentor)?</h3>
		                        <hr/>
		                        <h6 className="black-text">A: We encourage mentorship at all levels of an individuals' professional journey, as we believe it only helps heighten and expediate his or her learning.
		                          Therefore, our only requirement for mentors is that they demonstrate a higher level of knowledge and professional expereience than their mentees, and have a heart for collabortive learning and accomplishment.</h6>
		               	      </div>
		                    </div>
		                  </div>
		                </div>
		              </Jumbotron>
		            </Col>
		        </Row>
		        <br />
		      	<br />

	        </Container>

		</Col>
  </Row>

export default Parallax3;

//animated fadeIn >> add these into the className to make the background pic FADE IN...! !