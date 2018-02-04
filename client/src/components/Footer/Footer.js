//React Library import:
//=============================
import React from "react";
import { Col, Row, Container } from "../Grid";

//=================================================================================
const Footer = () =>

  <footer className="page-footer" style={{backgroundColor: "blue"}}>
    <Container>

      <Row>

<<<<<<< HEAD
        <Col size="lg-6">
          <h6 className="white-text container text-center">Meet the faces and <br/> motivations behind the scenes.
          <Row>
          <a className="text-center grey-text text-lighten-3 container" href="/aboutus">Who we are.</a></h6>
        <Row/>
        </Col>

        <Col size="lg-6">
          <h5 className="container text-center">Contact Us</h5>
          <Row>
          <a className="grey-text text-lighten-4 container text-center" href="https://github.com/MavensAndMavericks/Mavens_and_Mavericks">https://github.com/MavensAndMavericks</a>
            <span><a href="mailto:lisajetton21@gmail.com" id="download-btn" className="btn btn-xs waves-effect waves-light transparent darken-4 white-text">Send an email.</a></span>       
        <Row/>
=======
        <Col size="lg-8">
        <div style={{textAlign: "center"}}>
          <h5 className="white-text container">Meet the faces and <br/> motivations behind the scenes.</h5>
          <p><a className="text-center" href="/aboutus">Who we are.</a></p>
          </div>
        </Col>

        <Col size="lg-4">
        <div style={{textAlign: "center"}}>
          <h5 className="container">Contact Us</h5>
          <a className="grey-text text-lighten-4 container text-center" href="https://github.com/MavensAndMavericks/Mavens_and_Mavericks">https://github.com/MavensAndMavericks</a>
            <span ><a className= "text-center" href="mailto:lisajetton21@gmail.com" id="download-btn" className="btn btn-xs waves-effect waves-light transparent darken-4 white-text">Send an email.</a></span>       
        </div>
>>>>>>> 0b0c38201adca56a8bde7313690fbc41dab0e944
        </Col>
         </Row>
        <br/>
<<<<<<< HEAD
        <Col size="lg-12">
          <p className="container text-center">
=======
        <Row>
        
        <Col size="s-12">
        <div style={{textAlign: "center", position: "relative", bottom: "15px", left: "10%"}}>
          <p className="container text-center" >
>>>>>>> 0b0c38201adca56a8bde7313690fbc41dab0e944
          © 2018 Copyright | Mavens and Mavericks
          </p>
          </div>
        </Col>

      </Row>

    </Container>
  </footer>

export default Footer;