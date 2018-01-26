

import React, { Component } from "react";
import { Card } from "react-materialize";
import { Col, Row } from "../Grid";



class CommentWall extends component {

    state = {
        questionnaire: [],

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
        return
        <div>

            <Row>
                <Col size="sm-6" >
                    <div className="comment-wall" > {

                            this.state.matches.length ? (
                                <div className="text-center" > {
                                    this.state.matches.map(match => (

                                        <main key={match._id}>

                                            <div class="card horizontal">
                                                <div class="card-image">
                                                    <img className="img-responsive" id="matchAvatar" src={match.githubAvatar} alt="Github Profile Pic" />
                                                </div>
                                                <div class="card-stacked">
                                                    <div class="card-content">
                                                        <h2>{match.firstName} {match.lastName}</h2>
                                                        <p class="cardFont grey-text">
                                                            <Link to={"https://github.com/" + match.gitHub} target="_blank" >
                                                                <strong className="githubHandler" > {match.gitHub} </strong>
                                                            </Link>
                                                            <br />
                                                            {match.comment}
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>
                                        </main>

                                    ))
                                }
                                </div>


                            ) : (
                                    <h3 className="text-center" > No Results to Display </h3>
                                )
                        }

                                
                </div> 
             </Col>
        </Row>
    </div>
    }
}

