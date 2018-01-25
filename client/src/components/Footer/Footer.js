//React Library import:
//=============================
import React from "react";
import { Col, Row, Container } from "../Grid";

//=================================================================================
const Footer = () =>
  <footer className="page-footer" style={{backgroundColor: "blue"}}>
    <Container>

      <Row>

        <Col size="sm-6">
          <h6 className="white-text container text-center">Meet the faces and <br/> motivations behind the scenes.</h6>
          <h6><a className="grey-text text-lighten-3 container text-center" href="/aboutus">Who we are.</a></h6>
        </Col>

        <Col size="sm-6">
          <h5 className="container text-center">Contact Us</h5>
          <a className="grey-text text-lighten-4 container text-center" href="https://github.com/MavensAndMavericks/Mavens_and_Mavericks"><strong>Github:</strong> https://github.com/MavensAndMavericks</a>
          <p className="grey-text text-lighten-4 container text-center"><strong>Email:</strong>
            <span><a href="mailto:lisajetton21@gmail.com" id="was_download-button" className="btn btn-large waves-effect waves-light transparent darken-4 white-text">Contact</a></span>
          </p>         
        </Col>

        <br/>
        <Col size="sm-12">
          <p className="container text-center">
          © 2018 Copyright | Mavens and Mavericks
          </p>
        </Col>

      </Row>

    </Container>
  </footer>;

export default Footer;