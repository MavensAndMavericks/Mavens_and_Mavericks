//React Library import:
//=============================
import React from "react";
import { Col, Row, Container } from "../Grid";

//=================================================================================
const Footer = () =>

  <footer className="page-footer" style={{backgroundColor: "blue"}}>
    <Container>

      <Row>

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
        </Col>
         </Row>
        <br/>
        <Row>
        
        <Col size="s-12">
        <div style={{textAlign: "center", position: "relative", bottom: "15px", left: "10%"}}>
          <p className="container text-center" >
          © 2018 Copyright | Mavens and Mavericks
          </p>
          </div>
        </Col>

      </Row>

    </Container>
  </footer>

export default Footer;