import React, { Component } from "react";
import {Input} from 'react-materialize'
//import API from "../../utils/API";
import "./QuestionsMentor.css";


class QuestionsMentor extends Component {

    render() {
        return (
          <div>
            <div row>
                <h5>8. What is your current level of experience? </h5>
            
                  <Input name='group1' type='radio' value='2' label='College' />
                  <Input name='group1' type='radio' value='3' label='New Professional' />
                  <Input name='group1' type='radio' value='4' label='Professional 5+ Years' />
                  <Input name='group1' type='radio' value='4' label='Expert' />

            </div>
            <br/>
            <br/>

            <div row>
                <h5>9. What are your preferred languages? </h5>
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
              <h5>10. What is your industry area of expertise? </h5>
                <Input name='group3' type='checkbox' value='Security' label='Security' />
                <Input name='group3' type='checkbox' value='Commerce' label='Commerce'  />
                <Input name='group3' type='checkbox' value='Finance' label='Finance' />            
                <Input name='group3' type='checkbox' value='Health' label='Health' />   
                <Input name='group3' type='checkbox' value='Gaming' label='Gaming' />
                <Input name='group3' type='checkbox' value='Social Media' label='Social Media' />
                <Input name='group3' type='checkbox' value='Marketing' label='Marketing' />
                <Input name='group3' type='checkbox' value='Marketing' label='Electrical Engineering' />
                <Input name='group3' type='checkbox' value='Marketing' label='Artifical Intelligence' />
                <Input name='group3' type='checkbox' value='Marketing' label='Web Design' />
            </div>
          </div>

    );
  }
}

export {QuestionsMentor};