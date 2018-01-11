//React Library imports:
import React, { Component } from "react";
import API from "../../utils/API";

//Componenet imports:
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn, QuestionsMentee } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import "./MaverickQuestionnaire.css";
import Footer from "../../components/Footer";

//=================================================================================
class MaverickQuestionnaire extends Component {
  state = {
    firstName:"",
    lastName:"",
    gitHub:"",
    quote: "",
    coded: "",
    profession: "",
    career: "",
    impact:"",
    reasons:"",
    accomplish:"",
    // bioquestions: [],
    careerLevel:"",
    languages: [],
    industryExperience: [],
    personalityResults: []
  };

    handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName && this.state.gitHub && this.state.quote && this.state.coded && this.state.profession && this.state.career && this.state.impact && this.state.reasons && this.state.accomplish) {
      API.saveQuestionnaire({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        gitHub: this.state.gitHub,
        quote: this.state.quote,
        coded: this.state.coded,
        profession: this.state.profession,
        career: this.state.career,
        impact: this.state.impact,
        reasons: this.state.reasons,
        accomplish: this.state.accomplish,
        industryExperience: this.state.industryExperience,
        personalityResults: this.state.personalityResults
      })
        .then(res => {window.location.pathname ="/welcomeMaverick"})
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Container fluid style={{backgroundImage:"url(/assets/futuristic-Factory-Background)"}}>>
          <Nav/>
          <br/>
          <br/>
          <br/>
          <br/>

          <Row className="header">
            <Col size="md-12">
              <Jumbotron>
                <h1 className="text-center">Welcome Maverick.</h1>
                <h5 className="text-center">Searching for a peronalized connection with Tech leaders in your community?</h5>
                <h5 className="text-center">Answer our questions below to be matched experienced leaders in the Tech Community.</h5>
              </Jumbotron>
            </Col>
          </Row>

          <form>
            <Row>
              <Col size ="md-6">
                <span class="icon-small">
                  <i class="small material-icons">person_pin</i>
                    <h5>First Name</h5>
                </span>
                  <Input
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    name="firstName"
                    placeholder="Required"
                  />
              </Col>

              <Col size= "md-6">
                <span class="icon-small">
                  <i class="small material-icons">person_pin</i>
                    <h5>Last Name</h5>
                </span>
                  <Input
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                    name="lastName"
                    placeholder="Required"
                  />
              </Col>
            </Row>

              <Row>
                <Col size = "md-12">
                
                  <h5>1. What is your GitHub Handler?</h5>
                    <Input
                      value={this.state.gitHub}
                      onChange={this.handleInputChange}
                      name="gitHub"
                    />

                  <h5>2. What is your favorite inspirational quote?</h5>
                    <Input
                      value={this.state.quote}
                      onChange={this.handleInputChange}
                      name="quote"
                    />

                  <h5>3. How extensively have you coded in the past?</h5>
                    <Input
                      value={this.state.coded}
                      onChange={this.handleInputChange}
                      name="coded"
                    />

                  <h5>4. What is your current profession?</h5>
                    <Input
                      value={this.state.profession}
                      onChange={this.handleInputChange}
                      name="profession"
                    />

                  <h5>5. What are your career goals?</h5>
                    <Input
                      value={this.state.career}
                      onChange={this.handleInputChange}
                      name="career"
                    />

                  <h5>6. What do you hope to accomplish through mentorship?</h5>
                    <TextArea
                      value={this.state.accomplish}
                      onChange={this.handleInputChange}
                      name="accomplish"
                    />

                  <QuestionsMentee
                  />

                  <FormBtn
                    // disabled={!(this.state.firstName && this.state.lastName && this.state.gitHub && this.state.careerLevel && this.state.languages && this.state.industryExperience && this.state.bioquestions)}
                    onClick={this.handleFormSubmit}
                  >
                    Submit Answers
                  </FormBtn>
                </Col>
              </Row>
            </form>
           
        </Container>

        <Footer/>
      </div>
    );
  }
}

export default MaverickQuestionnaire;