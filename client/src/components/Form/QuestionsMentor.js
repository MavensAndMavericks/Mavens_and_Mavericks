import React, { Component } from "react";
import API from "../../utils/API";
import "./QuestionsMentor.css";

import {Input} from "react-materialize";

class QuestionsMentor extends Component {
    state = {
        careerLevel1:"",
        careerLevel2:"",
        careerLevel3:"",
        careerLevel4:"",
        languages1:"",
        languages2:"",
        languages3:"",
        languages4:"",
        languages5:"",
        languages6:"",
        languages7:"",
        industryExperience1: "",
        industryExperience2: "",
        industryExperience3: "",
        industryExperience4: "",
        industryExperience5: "",
        industryExperience6: "",
        industryExperience7: "",
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.firstName && this.state.lastName && this.state.gitHub && this.state.careerLevel && this.state.languages && this.state.industryExperience && this.state.bioquestions) {
          API.saveQuestionnaire({
            careerLevel1: this.state.careerLevel1,
            careerLevel2: this.state.careerLevel2,
            careerLevel3: this.state.careerLevel3,
            careerLevel4: this.state.careerLevel4,
            languages1: this.state.languages1,
            languages2: this.state.languages2,
            languages3: this.state.languages3,
            languages4: this.state.languages4,
            languages5: this.state.languages5,
            languages6: this.state.languages6,
            languages7: this.state.languages7,
            industryExperience1: this.state.industryExperience1,
            industryExperience2: this.state.industryExperience2,
            industryExperience3: this.state.industryExperience3,
            industryExperience4: this.state.industryExperience4,
            industryExperience5: this.state.industryExperience5,
            industryExperience6: this.state.industryExperience6,
            industryExperience7: this.state.industryExperience7
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

              //<div className="form-group">
              //   <input className="group1" type="radio" id="test1"{...props} />
              //   <label for="test1">Red</label>
              // </div>;
            <div>
                    <div row>
                        <h5>8. What is your current level of experience? </h5>

                        <Input className="with-gap" type="checkbox" name="careerLevel1" type="radio" id="careerLevel1" value={this.state.careerLevel1} onChange={this.handleInputChange} />
                        <label htmlfor="careerLevel1"> Novice</label>

                        <Input className="with-gap" type="checkbox" name="careerLevel2" type="radio" id="careerLevel2" value={this.state.careerLevel2} onChange={this.handleInputChange} />
                        <label htmlfor="careerLevel2"> College</label>

                        <Input className="with-gap" type="checkbox" name="careerLevel3" type="radio" id="careerLevel3" value={this.state.careerLevel3} onChange={this.handleInputChange} />
                        <label htmlfor="careerLevel3"> New Professional</label>

                        <Input className="with-gap" type="checkbox" name="careerLevel4" type="radio" id="careerLevel4" value={this.state.careerLevel4} onChange={this.handleInputChange} />
                        <label htmlfor="careerLevel4"> Professional 5+ Years</label>    

                    </div>

                    <div row>
                        <h5>9. What are you preferred languages? </h5>

                        <Input className="with-gap" type="checkbox" name="languages1" type="radio" id="languages1" value={this.state.languages1} onChange={this.handleInputChange} />
                        <label htmlfor="languages1"> JavaScript</label>

                        <Input className="with-gap" type="checkbox" name="languages2" type="radio" id="languages2" value={this.state.languages2} onChange={this.handleInputChange} />
                        <label htmlfor="languages2"> Python</label>

                        <Input className="with-gap" type="checkbox" name="languages3" type="radio" id="languages3" value={this.state.languages3} onChange={this.handleInputChange} />
                        <label htmlfor="languages3"> PHP</label>  

                        <Input className="with-gap" type="checkbox" name="languages4" type="radio" id="languages4" value={this.state.languages4} onChange={this.handleInputChange} />
                        <label htmlfor="languages4"> Ruby</label>   

                        <Input className="with-gap" type="checkbox" name="languages5" type="radio" id="languages5" value={this.state.languages5} onChange={this.handleInputChange} />
                        <label htmlfor="languages5"> C++</label>  

                        <Input className="with-gap" type="checkbox" name="languages6" type="radio" id="languages6" value={this.state.languages6} onChange={this.handleInputChange} />
                        <label htmlfor="languages6"> SQL</label> 

                        <Input className="with-gap" type="checkbox" name="languages7" type="radio" id="languages7" value={this.state.languages7} onChange={this.handleInputChange} />
                        <label htmlfor="languages7"> HTML/CSS</label> 

                    </div>

                    <div row>
                        <h5>10. What is your industry of expertise? </h5>

                        <Input className="with-gap" type="checkbox" name="industryExperience1" type="radio" id="industryExperience1" value={this.state.industryExperience1} onChange={this.handleInputChange} />
                        <label htmlfor="industryExperience1"> Security</label>

                        <Input className="with-gap" type="checkbox" name="industryExperience2" type="radio" id="industryExperience2" value={this.state.industryExperience2} onChange={this.handleInputChange} />
                        <label htmlfor="industryExperience2"> Commerce</label>

                        <Input className="with-gap" type="checkbox" name="industryExperience3" type="radio" id="industryExperience3" value={this.state.industryExperience3} onChange={this.handleInputChange} />
                        <label htmlfor="industryExperience3"> Finance</label>  

                        <Input className="with-gap" type="checkbox" name="industryExperience4" type="radio" id="industryExperience4" value={this.state.industryExperience4} onChange={this.handleInputChange} />
                        <label htmlfor="industryExperience4"> Health</label>    

                        <Input className="with-gap" type="checkbox" name="industryExperience5" type="radio" id="industryExperience5" value={this.state.industryExperience5} onChange={this.handleInputChange} />
                        <label htmlfor="industryExperience5"> Gaming</label> 

                        <Input className="with-gap" type="checkbox" name="industryExperience6" type="radio" id="industryExperience6" value={this.state.industryExperience6} onChange={this.handleInputChange} />
                        <label htmlfor="industryExperience6"> Social Media</label> 

                        <Input className="with-gap" type="checkbox" name="industryExperience7" type="radio" id="industryExperience7" value={this.state.industryExperience7} onChange={this.handleInputChange} />
                        <label htmlfor="industryExperience7"> Marketing</label> 

                    </div>
            </div>
        )
    }
}

export {QuestionsMentor};

// <input type="checkbox" id="item1" onChange={() => console.log("hello world")} />
// <label htmlFor="check">Text</label>

//<Input name='group1' type='checkbox' value='red' label='Red' />