import React, { Component } from "react";
import API from "../../utils/API";
import "./QuestionsMentor.css";




class QuestionsMentor extends Component {
    state = {
        // careerLevel:"",
        // languages: [],
        // industryExperience: []
        selectedOption: ""
    };


getInitialState=() =>  {
 return {
      selectedOption: ''
     };
   };
 
 handleChange = event => {
   this.setState({
     selectedOption: event.target.value
   });
 };
 
 
 

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.firstName && this.state.lastName && this.state.gitHub && this.state.careerLevel && this.state.languages && this.state.industryExperience && this.state.bioquestions) {
          API.saveQuestionnaire({
            careerLevel: this.state.gitHub,
            languages: this.state.radioquestions,
            industryExperience: this.state.industryExperience
          })
            .then(res => {window.location.pathname("/welcomeMaven")})
            .catch(err => console.log(err));
        }
    };

    render() {
        return (
                <div>

            
                    <div row>
                        <h5>8. What is your current level of experience? </h5>

                        <input className="with-gap" name="careerLevel" type="radio" id="q1" value="option1"
                         />
                        <label for="careerLevel"> Novice</label>

                        <input className="with-gap" name="careerLevel" type="radio" id="q1" value="option2"
                          />
                        <label for="careerLevel"> College</label>

                        <input className="with-gap" name="careerLevel" type="radio" id="q1" value="option3" 
                         />
                        <label for="careerLevel"> New Professional</label>

                        <input className="with-gap" name="careerLevel" type="radio" id="q1" value="option4"
                        checked={this.state.selectedOption === 'option4'}  />
                        <label for="careerLevel"> Professional 5+ Years</label>    

                    </div>

                    <div row>
                        <h5>9. What are you preferred languages? </h5>

                        <input className="with-gap" name="languages" type="checkbox" id="q2" value={this.state.languages} />
                        <label for="languages"> JavaScript</label>

                        <input className="with-gap" name="languages" type="checkbox" id="q2" value={this.state.languages} />
                        <label for="languages"> Python</label>

                        <input className="with-gap" name="languages" type="checkbox" id="q2" value={this.state.languages} />
                        <label for="languages"> PHP</label>  

                        <input className="with-gap" name="languages" type="checkbox" id="q2" value={this.state.languages} />
                        <label for="languages"> Ruby</label>   

                        <input className="with-gap" name="languages" type="checkbox" id="q2" value={this.state.languages} />
                        <label for="languages"> C++</label>  

                        <input className="with-gap" name="languages" type="checkbox" id="q2" value={this.state.languages} />
                        <label for="languages"> SQL</label> 

                        <input className="with-gap" name="languages" type="checkbox" id="q2" value={this.state.languages} />
                        <label for="languages"> HTML/CSS</label> 

                    </div>

                    <div row>
                        <h5>10. What is your industry of expertise? </h5>

                        <input className="with-gap" name="industryExperience" type="checkbox" id="q3" value={this.state.industryExperience} />
                        <label for="industryExperience"> Security</label>

                        <input className="with-gap" name="industryExperience" type="checkbox" id="q3" value={this.state.industryExperience} />
                        <label for="industryExperience"> Commerce</label>

                        <input className="with-gap" name="industryExperience" type="checkbox" id="q3" value={this.state.industryExperience} />
                        <label for="industryExperience"> Finance</label>  

                        <input className="with-gap" name="industryExperience" type="checkbox" id="q3" value={this.state.industryExperience} />
                        <label for="industryExperience"> Health</label>    

                        <input className="with-gap" name="industryExperience" type="checkbox" id="q3" value={this.state.industryExperience} />
                        <label for="industryExperience"> Gaming</label> 

                        <input className="with-gap" name="industryExperience" type="checkbox" id="q3" value={this.state.industryExperience} />
                        <label for="industryExperience"> Social Media</label> 

                        <input className="with-gap" name="industryExperience" type="checkbox" id="q3" value={this.state.industryExperience} />
                        <label for="industryExperience"> Marketing</label> 

                    </div>
            </div>

    );
  }
}

export {QuestionsMentor};

