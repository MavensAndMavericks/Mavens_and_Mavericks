import React from "react";
import "./Parallax2.css";
import { Col, Row, Container } from "../Grid";
import Jumbotron from "../Jumbotron";

const Parallax2 = () =>
	<Row className="container">
		<Col size="md-12" className="container" >

			<div className="parallax4 conatainer" data-type="content" style={{ backgroundImage: "url(/assets/Mini-Robot-Duo.jpeg)", marginBottom: "30px" }}>
				<div style={{ backgroundColor: "#FFFFFF", opacity: ".75", zIndex: "3" }}>
					<h2 className="header">What defines a Mentor or Mentee?</h2>
				</div>
				<Container fluid style={{ marginBottom: "100px" }}>

					<br />

					<Row>
						<Col size="md-12">
							<Jumbotron>
								<div className="mentorText" style={{ textAlign: "justified", backgroundColor: "white", color: "black", padding: "30px" }}>
									<h4>A mentor can any combination of these following things:</h4>
									<h5><span style={{ fontWeight: "bold", textDecoration: "underline" }}>Advisor and coach:</span> Mentors provide advice, guidance, and feedback; share their experience and expertise
as appropriate; act as a sounding board for ideas and action plans.</h5>
									<h5> <span style={{ fontWeight: "bold", textDecoration: "underline" }}>Champion and cheerleader:</span> They offer encouragement and support to try new things; help mentees move out
their comfort zones; celebrate successes; help mentees understand when things do not go as planned.</h5>
									<h5><span style={{ fontWeight: "bold", textDecoration: "underline" }}>Resource and recommendations:</span> Mentors can identify resources that will help mentees with personal development and
growth, such as recommending books, workshops, or other learning tools; encourage mentees to join networking
 organizations or introduce them to new contacts.</h5>
									<h5><span style={{ fontWeight: "bold", textDecoration: "underline" }}>Devil's advocate:</span> They provide the tough feedback that mentees need to hear in order to move forward;
 push mentees to take risks when appropriate; help mentees consider and weigh potential consequences of decisions and actions
to avoid the pitfalls and predictable surprises that may occur.</h5>
									<br />
									<br />
									<h2>What kind of mentor will you be? Sign up today!</h2>
								</div>
							</Jumbotron>
						</Col>
					</Row>
					<Row>
						<Col size="md-12">
							<Jumbotron>
								<div className="menteeText" style={{ textAlign: "justified", backgroundColor: "white", color: "black", padding: "30px" }}>
								<h4>Prospective mentees should possess the following qualities:</h4>
								
									<h5>Mentees need to identify initial learning goals and measures of success for the mentoring relationship.</h5>
									<h5>They should be open to and seek feedback.</h5>
									<h5>Mentees should play an active role in their own learning and help drive the process.</h5>
									<h5>Mentees also should schedule and attend mentor conversations.</h5>
									<h5>Those being mentored must follow through on commitments and take informed risks as they try new options and behaviors in support of career and development goals.</h5>
									<br />
									<br />
							
									<h2>Are you ready to be mentored? Sign up today!</h2>
								</div>
							</Jumbotron>
						</Col>
					</Row>
				</Container>



			</div>
		</Col>
	</Row>

export default Parallax2;

//animated fadeIn >> add these into the className to make the background pic FADE IN...! !