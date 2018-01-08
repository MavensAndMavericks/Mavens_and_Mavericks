// READ PLEASE: !! THIS EXAMPLE WAS TAKEN DIRECTLY FROM THE "BOOKS" PAGE EXAMPLE!! >> ONLY changed out the "books" name to keep from bundling incorreclty.. !!

//React Library imports:
import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

//Componenet imports:
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn, QuestionsMentor } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";

//=================================================================================
class MavenQuestionnaire extends Component {
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
    if (this.state.firstName && this.state.lastName && this.state.gitHub && this.state.careerLevel && this.state.languages && this.state.industryExperience && this.state.bioquestions)
      API.saveQuestionnaire({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        gitHub: this.state.gitHub,
        bioquestions: this.state.bioquestions
        careerLevel: this.state.gitHub,
        languages: this.state.radioquestions
        industryExperience: this.state.gitHub,
        personalityResults: this.state.personalityResults
      })
        .then(res => {window.location.pathname("/MavenProfile")})
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Nav/>

        <Row>
          <Col size="md-12">

            <Jumbotron>
              <h1 className="text-center">Welcome to Maverns and Mavericks!</h1>
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
                name="bio1"
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

              <QuestionsMentor/>

              <FormBtn
                disabled={!(this.state.firstName && this.state.lastName && this.state.gitHub && this.state.careerLevel && this.state.languages && this.state.industryExperience && this.state.bioquestions)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>

            </form>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">Jumbotron Block - Put inspirational Quote here?</h1>
            </Jumbotron>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default MavenQuestionnaire;