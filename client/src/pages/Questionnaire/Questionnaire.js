// READ PLEASE: !! THIS EXAMPLE WAS TAKEN DIRECTLY FROM THE "BOOKS" PAGE EXAMPLE!! >> ONLY changed out the "books" name to keep from bundling incorreclty.. !!

//React Library imports:
import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

//Componenet imports:
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn, Questions } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";

//=================================================================================
class Questionnaire extends Component {
  state = {
    questionnaire: [],
    firstName,
    lastName,
    radioquestions: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveQuestionnaire({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
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
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="First Name"
              />
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
                placeholder="Last Name"
              />
              
              <h5>1. What is your GitHub Link?</h5>
                <Input
                value={this.state.bio1}
                onChange={this.handleInputChange}
                name="bio1"
              />
                <h5>2. What is your favorite inspirational quote?</h5>
                <Input
                value={this.state.bio2}
                onChange={this.handleInputChange}
                name="bio2"
              />

              <h5>3. How extensively have you coded in the past?</h5>
                <Input
                value={this.state.bio3}
                onChange={this.handleInputChange}
                name="bio3"
              />

              <h5>4. What is your current profession?</h5>
                <Input
                value={this.state.bio4}
                onChange={this.handleInputChange}
                name="bio4"
              />

              <h5>5. What is your previous schooling?</h5>
                <Input
                value={this.state.bio5}
                onChange={this.handleInputChange}
                name="bio5"
              />

              <h5>6. Has mentorship impacted your professional success, and if so, how?</h5>
              <TextArea
                value={this.state.bio6}
                onChange={this.handleInputChange}
                name="bio6"
              />

              <h5>7. What are you reasons for mentorship?</h5>
              <TextArea
                value={this.state.bio7}
                onChange={this.handleInputChange}
                name="bio7"
              />

              <Questions
                value={this.state.questions}
                onChange={this.handleInputChange}
                name="radioquestions"
              />
              <FormBtn
                disabled={!(this.state.firstName && this.state.lastName && this.state.radioquestions)}
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
              <h1 className="text-center">Why have a mentor?</h1>
            </Jumbotron>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Questionnaire;