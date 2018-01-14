//React Library imports:
import React, { Component } from "react";
import API from "../../utils/API";
import {Input} from 'react-materialize'

//Componenet imports:
import { Col, Row, Container } from "../../components/Grid";
import { InputBox, TextArea, FormBtn } from "../../components/Form"; //QuestionsMentor
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import "./MaverickQuestionnaire.css";
import Footer from "../../components/Footer";

//=================================================================================
class MaverickQuestionnaire extends Component {
  state = {
    // questionnaires: [],
    firstName:"",
    lastName:"",
    type: "maverick",
    gitHub:"",
    quote: "",
    coded: "",
    profession: "",
    schooling: "",
    impact: "",
    reasons: "",
    careerLevel1: "",
    careerLevel2: "",
    careerLevel3: "",
    careerLevel4: "",
    languagesJS: "",
    languagesPython: "",
    languagesPHP: "",
    languagesRuby: "",
    languagesCplus: "",
    languagesSQL: "",
    languagesHTML: "",
    industrysecurity: "",
    industrycommerce: "",
    industryfinance: "",
    industryhealth: "",
    industrygaming: "",
    industrysocialmedia: "",
    industrywebdesign: "",
    industrymarketing: "",
    industryelectrical: "",
    industryAI: "",
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
    if (this.state.firstName && this.state.lastName && this.state.gitHub && this.state.quote && this.state.coded && this.state.profession && this.state.schooling && this.state.impact && this.state.reasons ) {
      // console.log("Hey!  Lorna so cool! :)  We're Jelly.");
      
      API.saveQuestionnaire({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        type: this.state.type,
        gitHub: this.state.gitHub,
        quote: this.state.quote,
        reasons: this.state.reasons,
        coded: this.state.coded,
        goals: this.state.goals,
        profession: this.state.profession,
        careerLevel: [this.state.careerLevel1, this.state.careerLevel2, this.state.careerLevel3,this.state.careerLevel4],
        languages: [this.state.languagesPython, this.state.languagesPHP, this.state.languagesRuby, this.state.languagesCplus, this.state.languagesSQL, this.state.languagesHTML],
        industryExperience: [this.state.industrysecurity, this.state.industryfinance, this.state.industryhealth, this.state.industrygaming, this.state.industrysocialmedia, this.state.industrywebdesign, this.state.industrymarketing, this.state.industryelectrical, this.state.industryAI]
  
        // personalityResults: this.state.personalityResults
      })          
        // .then(res => this.handleMatching(res))
        .catch(err => console.log(err))
        .then( window.location.pathname ="/welcomeMaven"); //>>> <Link to={"/welcomeMaven/" + questionnaire._id}>  <<<!!?? Would this work ??!!
    }
  };

// handleMatching = (res) = > {
//   var length = res.length[i];
//   var jlength = res.length[j];

//   API.getQuestionnaires({
//     for (var i=0; i < res.length; i++){
//       if(type==="maverick"){
//         for (var j=0; j< length; j++){

//           if (this.state.maverickLanguages === this.state.mavenLanguages){
//             for (var k= 0; k< jlength; k++){
//               // if-else statement for industry
//             }
//           }
//         }
//       }
//     }
//   })
// }




  // handleMatching = (res) => {

  //    // This should be our current client's results
  //    const currentResults = res.data;
  //   if (currentResults.type === "maven") {
  //     //then search for all those in "mavericks"
  //     API.getQuestionnaire()
  //       .then(res => {
  //         const maverick = res.data.filter(questionnaire => questionnaire.type === "maverick")
  //       }).catch(err => console.log(err));
  //     };
  //Maven Logic
  //1. iterate over mavericks to find least amount of difference between languages
  //  a loop
  
  // for (i=0; i < maverick.length; i++){
  
  //  let currentUserLang = currentResults.languages;
  //  let maverickLang = maverick[i].languages;
  // let matching = [];

  //  currentUserLang.forEach(function(element, maverickLang){
  //    for (let lang of maverickLang){
  //   if (element === lang){
  //       maverickLang[]
  //   }

  //    }
  //  })

//    arr.forEach(function callback(currentValue[, index[, array]]) {
//     //your iterator
// }[, thisArg]);

  //2. iterate over mavericks to find least amount of difference between industries
  //  a loop 
  // a match === array of first 15 matches, assign this array to the match model

  // }
 
  // };

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
                <h1 className="text-center">Welcome Maverick.</h1>
               <h5 className="text-center">Searching for a peronalized connection with Tech leaders in your community?</h5>
               <h5 className="text-center">Answer our questions below to be matched experienced leaders in the Tech Community.</h5>
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
                  <InputBox
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
                  <InputBox
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                    name="lastName"
                    placeholder="Required"
                  />
              </Col>
            </Row>

            <Row>

              <Col size="md-12"> 
                <h5>1. What is your GitHub Handler?</h5>
                  <InputBox
                    value={this.state.github}
                    onChange={this.handleInputChange}
                    name="gitHub"
                  />
                <h5>2. What is your favorite inspirational quote?</h5>
                  <InputBox
                    value={this.state.quote}
                    onChange={this.handleInputChange}
                    name="quote"
                  />
                <h5>3. What do you hope to accomplish through mentorship?</h5>
                  <InputBox
                    value={this.state.reasons}
                    onChange={this.handleInputChange}
                    name="reasons"
                  />
                <h5>4. How extensively have you coded in the past?</h5>
                  <InputBox
                    value={this.state.coded}
                    onChange={this.handleInputChange}
                    name="coded"
                  />
                <h5>5. What are your career goals?</h5>
                  <InputBox
                    value={this.state.goals}
                    onChange={this.handleInputChange}
                    name="goals"
                  />
                <h5>6. What is your current profession?</h5>
                  <TextArea
                    value={this.state.profession}
                    onChange={this.handleInputChange}
                    name="profession"
                  />

 
                <div>
                  <div row>
                      <h5>8. What is your current level of experience? </h5>
                        <Input name='careerLevel' onChange={this.handleInputChange} type='radio' value={this.state.careerLevel1} label='College' />
                        <Input name='careerLevel' onChange={this.handleInputChange} type='radio' value={this.state.careerLevel2} label='New Professional' />
                        <Input name='careerLevel' onChange={this.handleInputChange} type='radio' value={this.state.careerLevel3} label='Professional 5+ Years' />
                        <Input name='careerLevel' onChange={this.handleInputChange} type='radio' value={this.state.careerLevel4} label='Expert' />

                  </div>
                  <br/>
                  <br/>

                  <div row>
                      <h5>9. What are your preferred languages? </h5>
                          <Input name='languages' onChange={this.handleInputChange} type='checkbox' value={this.state.languagesJS} label='Javascript' />
                          <Input name='languages' onChange={this.handleInputChange} type='checkbox' value={this.state.languagesPython} label='Python' />
                          <Input name='languages' onChange={this.handleInputChange} type='checkbox' value={this.state.languagesPHP} label='PHP'  />
                          <Input name='languages' onChange={this.handleInputChange} type='checkbox' value={this.state.languagesRuby} label='Ruby' />   
                          <Input name='languages' onChange={this.handleInputChange} type='checkbox' value={this.state.languagesC++} label='C++' />
                          <Input name='languages' onChange={this.handleInputChange} type='checkbox' value={this.state.languagesSQL} label='SQL' />
                          <Input name='languages' onChange={this.handleInputChange} type='checkbox' value={this.state.languagesHTML} label='HTML/CSS' /> 
                  </div> 
                  <br/>
                  <br/> 

                  <div row>
                    <h5>10. What is your industry area of expertise? </h5>
                      <Input name='industry' onChange={this.handleInputChange} type='checkbox' value={this.state.industrysecurity} label='Security' />
                      <Input name='industry' onChange={this.handleInputChange} type='checkbox' value={this.state.industrycommerce} label='Commerce'  />
                      <Input name='industry' onChange={this.handleInputChange} type='checkbox' value={this.state.industryfinance} label='Finance' />            
                      <Input name='industry' onChange={this.handleInputChange} type='checkbox' value={this.state.industryhealth} label='Health' />   
                      <Input name='industry' onChange={this.handleInputChange} type='checkbox' value={this.state.industrygaming} label='Gaming' />
                      <Input name='industry' onChange={this.handleInputChange} type='checkbox' value={this.state.industrysocialmedia} label='Social Media' />
                      <Input name='industry' onChange={this.handleInputChange} type='checkbox' value={this.state.industrywebdesign} label='Web Design' />
                      <Input name='industry' onChange={this.handleInputChange} type='checkbox' value={this.state.industrymarketing} label='Marketing' />
                      <Input name='industry' onChange={this.handleInputChange} type='checkbox' value={this.state.industryelectrical} label='Electrical Engineering' />
                      <Input name='industry' onChange={this.handleInputChange} type='checkbox' value={this.state.industryAI} label='Artifical Intelligence' />
                  </div>
                </div>


                <FormBtn
                  disabled={!(this.state.firstName && this.state.lastName && this.state.gitHub && this.state.quote && this.state.coded && this.state.goals && this.state.profession && this.state.reasons)}
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