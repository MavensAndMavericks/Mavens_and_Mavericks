import React from "react";
import "./Parallax5.css";
import { Col, Row, Container } from "../Grid";
import Jumbotron from "../Jumbotron";

const Parallax5 = () =>
	<Row className="container">
    	<Col size="md-12" className="container" >

          <br />
          <br />
          <br />

		    <div className="parallax4 conatiner" data-type="content" style={{backgroundImage:"url(/assets/business-Walking-Together.jpeg)"}}>
		    	<div style={{backgroundColor:"#FFFFFF", opacity:".75", zIndex:"3"}}>
		    		<h2 className="header">Who We Are</h2>
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
                  <div class="card-image">
                    <img className="img-responsive ourPhotos" src="/assets/austin.png" alt="austinPic"/>
                  </div>
                  <div class="card-stacked">
                    <div class="card-content">
                      <div id="austin">
                        <h3 className="text-center black-text">Austin</h3>
                        <hr/>
                        <br/>
                        <h6 className="black-text">Recent graduate of the University of Texas's Full Stack Developer Program.
                          Growing developer with a background in Anthropology.</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </Jumbotron>
            </Col>

            <Col size="md-6">
              <Jumbotron className="img-responsive">
                <div class="card horizontal">
                  <div class="card-image">
					           <img className="img-responsive ourPhotos" src="/assets/amanda.jpg" alt="amandaPic"/>
                  </div>
                  <div class="card-stacked">
                    <div class="card-content">
                      <div id="amanda">
                        <h3 className="text-center black-text">Amanda</h3>
                        <hr/>
                        <h6 className="black-text">Full Stack Web Developer with a passion for building dynamic web applications. Highly knowledgeable in HTML, CSS, JavaScript/jQuery,
                         databases, and popular CSS frameworks. Very motivated to apply my knowledge and expertise to maximize client efficiency. </h6>  
                      </div>
                    </div>
                  </div>
                </div>
              </Jumbotron>
            </Col>
          </Row>

          <Row>
            <Col size="md-6">
              <Jumbotron className="img-responsive">
                <div class="card horizontal">
                  <div class="card-image">
                    <img className="img-responsive ourPhotos" src="/assets/lisa.jpg" alt="lisaPic"/>
                  </div>
                  <div class="card-stacked">
                    <div class="card-content">
                      <div id="lisa">
                        <h3 className="text-center black-text">Lisa</h3>
                        <hr/>
                        <br/>
                        <h6 className="black-text">Highly motivated Full Stack Developer who enjoys creative thinking,
                          teamwork, and complex challenges. Currently studying the MERN stack at the UT Austin.</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </Jumbotron>
            </Col>

            <Col size="md-6">
              <Jumbotron className="img-responsive">
                <div class="card horizontal">
                  <div class="card-image">
                    <img className="img-responsive ourPhotos" src="/assets/lorna.jpg" alt="lornaPic"/>
                  </div>
                  <div class="card-stacked">
                    <div class="card-content">
                      <div id="lorna">
                        <h3 className="text-center black-text">Lorna</h3>
                        <hr/>
                        <h6 className="black-text">  These days you can usually find me sitting behind a laptop or cruising around Austin on my bicycle.
                        Recent grad from the Full Stack Development Boot Camp at UT Austin, specializing in the MERN stack.</h6>
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
		    </div>
		</Col>
  </Row>

export default Parallax5;

//animated fadeIn >> add these into the className to make the background pic FADE IN...! !
// 2nd Option for pic: url(/assets/group-Learning-girl.jpeg)"
// 3rd Option for pic: url(/assets/pair-Excitement.jpeg)
// 4th Option for pic: url(paired-Programming-fancy,jpg)

//** /assets/mentorImage2.png USE THIS on the Front Page somewhere (slideshow somehwere??)