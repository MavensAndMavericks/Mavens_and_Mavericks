//React Library imports:
import React, { Component } from "react";
import API from "../../utils/API";

//Componenet imports:
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn, QuestionsMentee } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

//=================================================================================
class MaverickQuestionnaire extends Component {
  state = {
    firstName:"",
    lastName:"",
    gitHub:"",
    bioquestions: [],
    careerLevel:"",
    languages: [],
    industryExperience: [],
    personalityResults: []
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName && this.state.gitHub && this.state.careerLevel && this.state.languages && this.state.industryExperience && this.state.bioquestions) {
      API.saveQuestionnaire({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        gitHub: this.state.gitHub,
        bioquestions: this.state.bioquestions,
        careerLevel: this.state.gitHub,
        languages: this.state.radioquestions,
        industryExperience: this.state.industryExperience,
        personalityResults: this.state.personalityResults
      })
        .then(res => {window.location.pathname("/welcomeMaverick")})
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

          <Row>
            <Col size="md-12">

              <Jumbotron>
                <h1 className="text-center">Welcome to Mavens and Mavericks!</h1>
              </Jumbotron>

              <form>
                <Input
                  value={this.state.firstName}
                  name="firstName"
                  placeholder="First Name"
                />
                <Input
                  value={this.state.lastName}
                  name="lastName"
                  placeholder="Last Name"
                />
                
                <h5>1. What is your GitHub Link?</h5>
                  <Input
                  value={this.state.gitHub}
                  name="gitHub"
                />
                  <h5>2. What is your favorite inspirational quote?</h5>
                  <Input
                  value={this.state.bioquestions}
                  name="bioquestions"
                />

                <h5>3. How extensively have you coded in the past?</h5>
                  <Input
                  value={this.state.bioquestions}
                  name="bioquestions"
                />

                <h5>4. What is your current profession?</h5>
                  <Input
                  value={this.state.bioquestions}
                  name="bioquestions"
                />

                <h5>5. What is your previous schooling?</h5>
                  <Input
                  value={this.state.bioquestions}
                  name="bioquestions"
                />

                <h5>6. Has mentorship impacted your professional success, and if so, how?</h5>
                <TextArea
                  value={this.state.bioquestions}
                  name="bioquestions"
                />

                <h5>7. What are you reasons for mentorship?</h5>
                <TextArea
                  value={this.state.bioquestions}
                  name="bioquestions"
                />

                <QuestionsMentee/>

                <FormBtn
                  disabled={!(this.state.firstName && this.state.lastName && this.state.gitHub && this.state.careerLevel && this.state.languages && this.state.industryExperience && this.state.bioquestions)}
                  onClick={this.handleFormSubmit}
                >
                  Submit Book
                </FormBtn>

              </form>
            </Col>
          </Row>
        
        </Container>

        <Footer/>
      </div>
    );
  }
}

export default MaverickQuestionnaire;