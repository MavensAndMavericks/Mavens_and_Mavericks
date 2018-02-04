//React Library import:
//=============================
import React from "react";
import { Col, Row, Container } from "../Grid";

//=================================================================================
const Footer = () =>

  <footer className="page-footer" style={{backgroundColor: "blue"}}>
    <Container>

      <Row>

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
        </Col>

        <br/>
        <Col size="lg-12">
          <p className="container text-center">
          © 2018 Copyright | Mavens and Mavericks
          </p>
        </Col>

      </Row>

    </Container>
  </footer>

export default Footer;