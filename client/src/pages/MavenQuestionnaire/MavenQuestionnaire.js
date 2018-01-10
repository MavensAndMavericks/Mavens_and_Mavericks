// READ PLEASE: !! THIS EXAMPLE WAS TAKEN DIRECTLY FROM THE "BOOKS" PAGE EXAMPLE!! >> ONLY changed out the "books" name to keep from bundling incorreclty.. !!

//React Library imports:
import React, { Component } from "react";
import API from "../../utils/API";

//Componenet imports:
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn, QuestionsMentor } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import "./MavenQuestionnaire.css";
import Footer from "../../components/Footer";

//=================================================================================
class MavenQuestionnaire extends Component {
  state = {
    firstName:"",
    lastName:"",
    gitHub:"",
    quote: "",
    coded: "",
    profession: "",
    schooling: "",
    impact:"",
    reasons:"",
    // bioquestions: [],
    careerLevel:"",
    languages: [],
    industryExperience: [],
    //personalityResults: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName && this.state.gitHub && this.state.careerLevel && this.state.languages && this.state.industryExperience && this.state.bioquestions) {
      API.saveQuestionnaire({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        gitHub: this.state.gitHub,
        inspirationalQuote: this.state.inspirationalQuote,
        codingHistory: this.state.codingHistory,
        profession: this.state.profession,
        education: this.state.education,
        mentorIcon: this.state.mentorIcon,
        whyMentor: this.state.whyMentor,
        careerLevel: this.state.careerLevel,
        languages: this.state.languages,
        industryExperience: this.state.industryExperience,
        personalityResults: this.state.personalityResults
      })
        .then(res => {window.location.pathname("/welcomeMaven")})
        .catch(err => console.log(err));
    }
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };


  render() {
    return (
      <div>
        <Container fluid className="backgroundPic" style={{backgroundImage:"url(/assets/futuristic-Factory-Background)"}}>
          <Nav/>
          <br/>
          <br/>
          <br/>
          <br/>

          <Row className="header">
            <Col size="md-12">
              <Jumbotron>
                <h1 className="text-center">Welcome to Mavens and Mavericks!</h1>
              </Jumbotron>
            </Col>
          </Row>

          <form>
            <Row>
              <Col size ="md-6">
                <span className="icon-small">
                  <i className="small material-icons">person_pin</i>
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
                <span className="icon-small">
                  <i className="small material-icons">person_pin</i>
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
              <Col size="md-12"> 
                <h5>1. What is your GitHub Link?</h5>
                  <Input
                    value={this.state.github}
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
                <h5>5. What is your previous schooling?</h5>
                  <Input
                    value={this.state.schooling}
                    onChange={this.handleInputChange}
                    name="schooling"
                  />
                <h5>6. Has mentorship impacted your professional success, and if so, how?</h5>
                  <TextArea
                    value={this.state.impact}
                    onChange={this.handleInputChange}
                    name="impact"
                  />
                <h5>7. What are you reasons for mentorship?</h5>
                  <TextArea
                    value={this.state.reasons}
                    onChange={this.handleInputChange}
                    name="reasons"
                  />

                <QuestionsMentor/>  

                <FormBtn
                  disabled={!(this.state.firstName && this.state.lastName && this.state.gitHub && this.state.careerLevel && this.state.languages && this.state.industryExperience && this.state.bioquestions)}
                  onClick={this.handleFormSubmit}
                >
                  Submit Book
                </FormBtn>
              </Col>
            </Row>
          </form>


          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1 className="text-center">Jumbotron Block - Put inspirational Quote here?</h1>
              </Jumbotron>
            </Col>
          </Row>

        </Container>

        <Footer/>
      </div>
    );
  }
}

export default MavenQuestionnaire;

//    bioquestions: [],
// bioquestions: this.state.bioquestions,