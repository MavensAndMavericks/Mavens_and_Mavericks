//React Library imports:
import React, { Component } from "react";
import API from "../../utils/API";
import {Input} from 'react-materialize';

//Componenet imports:
import { Col, Row, Container } from "../../components/Grid";
import { InputBox, TextArea, FormBtn } from "../../components/Form"; //QuestionsMentor
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import "./MaverickQuestionnaire.css";
import Footer from "../../components/Footer";

//=================================================================================
const langList = [
  "Javascript",
  "Python",
  "PHP",
  "Ruby",
  "C++",
  "SQL",
  "HTMl/CSS"
];
const industryList = [
  "Security",
  "Commerce",
  "Finance",
  "Health",
  "Gaming",
  "Social Media",
  "Web Design",
  "Marketing",
  "Electrical Engineering",
  "Artifical Intelligence"
];

////////////////////////////////////////////////////////////////////
class MaverickQuestionnaire extends Component {
  state = {
    firstName:"",
    lastName:"",
    type: "maven",
    gitHub:"",
    quote: "",
    coded: "",
    profession: "",
    schooling: "",
    impact: "",
    reasons: "",
    careerLevel: "",
    languages: [],
    industryExperience: []
    //personalityResults: []
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
        coded: this.state.coded,
        profession: this.state.profession,
        schooling: this.state.schooling,
        impact: this.state.impact,
        reasons: this.state.reasons,
        careerLevel: this.state.careerLevel,
        languages: this.state.languages,
        industryExperience: this.state.industryExperience
        // personalityResults: this.state.personalityResults
      })          
        // .then(res => this.handleMatching(res))
        .catch(err => console.log(err))
        .then( window.location.pathname ="/welcomeMaverick"); //>>> <Link to={"/welcomeMaverick/" + questionnaire._id}>  <<<!!?? Would this work ??!!
    }
  };

  //////////////////////////////////////////////////////////////////////////////////
  // constructor() {
  //   super()
  //   this.state - {
  //     industryExperience: []
  //   }
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // // Checkbox Button Handling:
 //////////Language Checkboxes
  handleLanguageClick(event) {
    console.log(event.target.value)
    const languages = this.state.languages

    if(event.target.checked) {
      languages.push(event.target.value)
    } 
    else {
      let index = languages.indexOf(event.target.value)
      languages.splice(index, 1)
    }

    this.setState({ languages : languages })
  }

  createLangCheckboxes = () => (
    langList.map(word => {
      return (
        <div className="input-group">        
          <Input 
          label={word}
          type="checkbox"
          value={word}
          onChange={this.handleLanguageClick.bind(this)}
          key={word} />
        </div>
      )
    })
  );

 //////////Industries Checkboxes
  handleIndustryClick(event) {
    console.log(event.target.value)
    const industryExperience = this.state.industryExperience

    if(event.target.checked) {
      industryExperience.push(event.target.value)
    } 
    else {
      let index = industryExperience.indexOf(event.target.value)
      industryExperience.splice(index, 1)
    }

    this.setState({ industryExperience : industryExperience })
  }

// //For: IndustryExperience Checkboxes
  createIndustryCheckboxes = () => (
    industryList.map(word => {
      return (
        <div className="input-group">        
          <Input 
          label={word}
          type="checkbox"
          value={word}
          onChange={this.handleIndustryClick.bind(this)}
          key={word} />
        </div>
      )
    })
  );


//Radio Button Handling
  getInitialState= () => {
    return {
      careerLevel: "careerLevel2"
    };
  };

  handleOptionChange= (changeEvent) => {
    this.setState({
      careerLevel: changeEvent.target.value,
    });
  };
//////////////////////////////////////////////////////////////////////////////////

  render() {
    return (
      <div>
        <Container fluid >
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
                  <div row className="radio">
                      <h5>7. What is your current level of experience? </h5>
                        <Input onChange={this.handleOptionChange} name="experience" type='radio' value="College" checked={this.state.careerLevel.value} label='College' />
                        <Input onChange={this.handleOptionChange} name="experience" type='radio' value="New Professional" checked={this.state.careerLevel.value} label='New Professional' />
                        <Input onChange={this.handleOptionChange} name="experience" type='radio' value="Professional 5+ Years" checked={this.state.careerLevel.value} label='Professional 5+ Years' />
                        <Input onChange={this.handleOptionChange} name="experience" type='radio' value="Expert" checked={this.state.careerLevel.value} label='Expert' />
                  </div>
                </div>
                <br/>
              </Col>
            </Row>
          </form>      
          <Row>
            <Col size="md-12">

              <form>
                <div row className="checkbox">
                  <h5>8. What are your preferred languages? </h5>
                  <div className="input-group">
                    {this.createIndustryCheckboxes()}
                  </div>
                </div>

                <br/>

                <div row className="checkbox">
                  <h5>9. What is your industry area of interest? </h5>
                  <div className="input-group">
                    {this.createLangCheckboxes()}
                  </div>
                </div>

                <FormBtn
                  disabled={!(this.state.firstName && this.state.lastName && this.state.gitHub && this.state.quote && this.state.coded && this.state.profession && this.state.schooling && this.state.impact && this.state.reasons)}
                  onClick={this.handleFormSubmit}
                >
                  Submit Answers
                </FormBtn>
                <br/>  

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