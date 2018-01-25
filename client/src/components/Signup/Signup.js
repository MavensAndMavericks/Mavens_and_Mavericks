//React Library imports:
//=============================
import React, { Component } from "react";

//API Routing Import:
//=============================
import API from "../../utils/API";

//External Imports:
//=============================
import {Modal} from "react-materialize";

//Componenet imports:
//=============================
import "./Signup.css";
import { InputBox, FormBtn } from "../Form";
//=================================================================================

class Signup extends Component {
  state = {
    gitHub:"",
    password: "",
    id:"",
    type: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }


  handleSignUpSubmit = event => {
    event.preventDefault();
    
    API.getQuestionnaireGithub(this.state.gitHub)
       .then(res => {
          if(this.state.password === res.data.password) {
              this.setState({ 
                id:res.data.id,
                type:res.data.type
              })
           }
           else {
            alert("Opps! It looks like your password is incorrect. No worries, just try again; you have 3 attempts to remember correctly.");
           }
         }
       )                       
        .then(() => {
          console.log(this.state.id); 
          console.log(this.state.type);
          window.location.pathname = "/api/questionnaires/" + this.state.id + "/" + this.state.type  
        })
        .catch(err => console.log(err))            
  }

  render() {
    return(
        <div className="fixed-action-btn toolbar sign-up">

          <a className="btn-floating btn-large blue">
            <i className="large material-icons">person_pin</i>
            <span> Sign Up</span>
          </a>

          <ul>
            
            <li className="waves-effect waves-light"><a href="/MaverickQuestionnaire"><i className="material-icons">wb_incandescent</i>  Mentee Sign Up</a></li>
            <li className="waves-effect waves-light"><a href="/MavenQuestionnaire"><i className="material-icons">vpn_key</i>  Mentor Sign Up</a></li>  
       



            <Modal
            
            	header={<h4 style={{textAlign:"center"}}>Welcome Back</h4>}
            	trigger={<li className="modalClass"><i className="material-icons">computer</i> Sign In</li>}>

              <h5 style={{textAlign:"center"}}> Time to get back to that awesome project of yours!</h5>
              <br/>

              <h5>Github Handler:</h5>
              <InputBox
               value={this.state.gitHub}
               onChange={this.handleInputChange}
               name="gitHub"
               />

              <h5>Account Password:</h5>
              <InputBox
              type="password"
               value={this.state.password}
               onChange={this.handleInputChange}
               name="password"
               />

               <br/>
               <br/>
               <br/>
               <br/>

               <FormBtn
                disabled={!(this.state.gitHub && this.state.password)}
                onClick={this.handleSignUpSubmit}
              >Submit
              </FormBtn>        
              
            </Modal> 


          </ul>
        </div>
    );
  }
}

export default Signup;


            // modalFooter= {<FormBtn
            //   disabled={!(this.state.gitHub && this.state.password)}
            //   onClick={this.handleSignUpSubmit}
            // >Submit
            // </FormBtn>}>
