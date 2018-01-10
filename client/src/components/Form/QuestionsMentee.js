import React, { Component } from "react";
import {Input} from 'react-materialize'
//import API from "../../utils/API";
import "./QuestionsMentor.css";


class QuestionsMentee extends Component {



    render() {
        return (
          <div>
            <div row>
                <h5>7. What is your current level of experience? </h5>
                  <Input name='group1' type='radio' value='Novice' label='Novice' />
                  <Input name='group1' type='radio' value='College' label='College' />
                  <Input name='group1' type='radio' value='New Professional' label='New Professional' />
                  <Input name='group1' type='radio' value='Professional 5+ Years' label='Professional 5+ Years' />
            </div>
            <br/>
            <br/>

            <div row>
                <h5>8. What are your preferred languages? </h5>
                    <Input name='group2' type='checkbox' value='Javascript' label='Javascript' />
                    <Input name='group2' type='checkbox' value='Python' label='Python' />
                    <Input name='group2' type='checkbox' value='PHP' label='PHP'  />
                    <Input name='group2' type='checkbox' value='Ruby' label='Ruby' />   
                    <Input name='group2' type='checkbox' value='C++' label='C++' />
                    <Input name='group2' type='checkbox' value='SQL' label='SQL' />
                    <Input name='group2' type='checkbox' value='HTML/CSS' label='HTML/CSS' />       
            </div> 
            <br/>
            <br/> 

            <div row>
              <h5>9. What is your industry area of interest? </h5>
                <Input name='group3' type='checkbox' value='Security' label='Security' />
                <Input name='group3' type='checkbox' value='Commerce' label='Commerce'  />
                <Input name='group3' type='checkbox' value='Finance' label='Finance' />            
                <Input name='group3' type='checkbox' value='Health' label='Health' />   
                <Input name='group3' type='checkbox' value='Gaming' label='Gaming' />
                <Input name='group3' type='checkbox' value='Social Media' label='Social Media' />
                <Input name='group3' type='checkbox' value='Marketing' label='Marketing' />
            </div>
          </div>

    );
  }
}

export {QuestionsMentee};












// import React from "react";
// import {Input} from 'react-materialize'

// export const QuestionsMentee = props =>

// <div>




//         <Input name='group1' type='radio' value='red' label='Red' />
//         <Input name='group1' type='radio' value='yellow' label='Yellow' />
//         <Input name='group1' type='radio' value='green' label='Green' className='with-gap' />
//         <Input name='group1' type='radio' value='yellow' label='Yellow' />
        

//         <div row>
//             <h5>7. What is your current level of experience? </h5>
//             <input className="with-gap" name="group1" type="radio" id="q1" checked />
//             <label> Novice</label>

//             <input className="with-gap" name="group1" type="radio" id="q1" checked/>
//             <label>College</label>

//             <input className="with-gap" name="group1" type="radio" id="q1" checked />
//             <label> New Professional</label>

//             <input className="with-gap" name="group1" type="radio" id="q1" checked/>
//             <label> Professional 5+ Years</label>    
//         </div>

//         <div row>
//             <h5>8. What are you preferred languages? </h5>
//             <input className="with-gap" name="group2" type="checkbox" id="q2" checked />
//             <label htmlFor="group2"> JavaScript</label>

//             <input className="with-gap" name="group2" type="checkbox" id="q2"  />
//             <label for="group2"> Python</label>

//             <input className="with-gap" name="group2" type="checkbox" id="q2"  />
//             <label for="group2"> PHP</label>  

//             <input className="with-gap" name="group2" type="checkbox" id="q2"  />
//             <label for="group2"> Ruby</label>   

//             <input className="with-gap" name="group2" type="checkbox" id="q2"  />
//             <label for="group2"> C++</label>  

//             <input className="with-gap" name="group2" type="checkbox" id="q2"  />
//             <label for="group2"> SQL</label> 

//             <input className="with-gap" name="group2" type="checkbox" id="q2"  />
//             <label for="group2"> HTML/CSS</label> 
//         </div>

//         <div row>
//             <h5>9. What are your industry areas of interest? </h5>
//             <input className="with-gap" name="group3" type="checkbox" id="q3" checked />
//             <label for="group3"> Security</label>

//             <input className="with-gap" name="group3" type="checkbox" id="q3"  />
//             <label for="group3"> Commerce</label>

//             <input className="with-gap" name="group3" type="checkbox" id="q3"  />
//             <label for="group3"> Finance</label>  

//             <input className="with-gap" name="group3" type="checkbox" id="q3"  />
//             <label for="group3"> Health</label>    

//             <input className="with-gap" name="group3" type="checkbox" id="q3"  />
//             <label for="group3"> Gaming</label> 

//             <input className="with-gap" name="group3" type="checkbox" id="q3"  />
//             <label for="group3"> Social Media</label> 

//             <input className="with-gap" name="group3" type="checkbox" id="q3"  />
//             <label for="group3"> Marketing</label> 
//         </div>

// </div>