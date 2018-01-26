//React Library imports:
//=============================
import React, { Component } from "react";
import { Link } from "react-router-dom";


//API Routing Import:
//=============================
import API from "../../utils/API";

//Componenet imports:
//=============================
import { Col, Row, Container } from "../Grid";
import Jumbotron from "../Jumbotron";
import "./ProfileMatch.css";
//import { List, ListItem } from "../List";


//=================================================================================
class ProfileMatch extends Component {
    state = {
        questionnaire: [],
        matches: [],
        githubUrl: ""

    };

    componentDidMount() {
        console.log("Pathname = " + window.location.pathname);
        const url = window.location.pathname;
        const id = url.split("/")[3];
        // const type = url.split("/")[3]
        // const id = this.props.id
        console.log("id = " + id);

        this.loadQuestionnaire(id)
    };


    loadQuestionnaire = (id) => {
        API.getMatches(id)
            .then(res =>
                this.setState({
                    matches: res.data
                })
            )
            .then(() => {
            	console.log("see below")
                console.log(this.state.matches);
                this.loadGithub(this.state.matches.gitHub);
            }) // MUST MAKE THIS A FUNCTION that renders a FUNCTION >>> by making this a function in a PROMISE chain, it will NOT PROCESS until the promise BEFORE IT has rendered its result!!! :)
            .catch(err => console.log(err));
    };

    loadGithub = (gitHub) => {
        API.getGithubUrl(gitHub)
            .then(res =>
                this.setState({
                    githubUrl: res.data //single obj //.avatar_url >>>> to find the pic
                })
            )
            .catch(err => console.log("More errors in profile match" + err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return ( 
        	<div>
            	<Container className = "container-fluid profile-bio" >
            		<Row>
            			<Col size = "sm-12" >
            				<div className = "profile-bio" > {
                /*<br/>
                						    	<h3 className="text-center">ProfileBio</h3>*/
            }
					            <Jumbotron className = "jumbotron"> 
					               <h2> Your Matches </h2> 
					               <br/>
                                    {this.state.matches.length ? ( 
				                        <div className = "text-center" > {
				                            this.state.matches.map(match => ( 
				                           
				                                <main key = { match._id }>

                                                    <div class="card horizontal">
                                                    	<div class="card-image">
                                                      		<img className="img-responsive" id="matchAvatar" src={match.githubAvatar} alt="Github Profile Pic"/>
                                                      	</div>
                                                      	<div class="card-stacked">
                                                            <div class="card-content">
                                                      		    <h2 id="yourMatches">{ match.firstName } { match.lastName }</h2>
                                                                <p class="cardFont grey-text">
                                                                	<strong> Github Handler: </strong>
                                                                	<Link to = { "https://github.com/" + match.gitHub } target = "_blank" >
                                                                	   <strong className = "githubHandler" > { match.gitHub } </strong>
                                                                	</Link> 
                                                                	<br/>
                                                                    Industries of Interest: { match.industryExperience.join(", ") }
                                                                    <br/> 
                                                                    Languages: { match.languages.join(", ") } 
                                                                    <br/>
                                                                    Reason for Mentorship: { match.impact } 
                                                                    </p>
                                                            </div>
                                                        </div>

                                                    </div>
				                                </main> 

                        				        ))
                    				        }          
                                        </div>


                                        ) : ( 
                                            <h3 className = "text-center" > No Results to Display </h3>
                                        )
                                    }

                                </Jumbotron>
                            </div> 
                        </Col>
                    </Row>
                <br/>
                <br/>
                </Container>
            </div>
        );
    }
}

export default ProfileMatch;