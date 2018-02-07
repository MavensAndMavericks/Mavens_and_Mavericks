//React Library import:
//=============================
import React from "react";
import { Col, Row, Container } from "../Grid";

//=================================================================================
const Footer = () =>

  <footer className="page-footer" style={{backgroundColor: "blue"}}>
    <Container>

      <Row>

        <Col size="s-12 lg-6">
          <div style={{textAlign: "center"}}>
            <br/>
            <h5 className="white-text container">Meet the faces and <br/> motivations behind the scenes.</h5>
            <br/>
            <a className="grey-text text-lighten-4 container text-center" href="/aboutus" target="_blank"><img class="contact-img" src="/assets/ProfilePerson.png" height="40px" alt="person"/><span>  Who we are</span></a>
          </div>
        </Col>

        <Col size="s-12 lg-6">
          <div style={{textAlign: "center"}}>
            <br/>
            <h5 className="container">Contact Us</h5>
            <br/>
            <Row>
              <Col size="s-6">
                <a className="grey-text text-lighten-4 container text-center" href="mailto:lisajetton21@gmail.com" target="_blank"><img class="contact-img" src="/assets/email.png" height="40px" alt="email"/></a>
              </Col>
              <Col size="s-6">
                <a className="grey-text text-lighten-4 container text-center" href="https://github.com/MavensAndMavericks/Mavens_and_Mavericks" target="_blank"><img class="contact-img" src="/assets/github.png" height="40px" alt="github"/></a>
              </Col>
            </Row>
          </div>
        </Col>
      
      </Row>
       
      <br/>
        
      <Row>
        
        <Col size="s-12">
          <div style={{ textAlign: "center" }}>
            <p className="container text-center" >
              Mavens and Mavericks | © 2018 Copyright
            </p>
          </div>
        </Col>

      </Row>

    </Container>
  </footer>

export default Footer;