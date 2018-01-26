

import React, { Component } from "react";
import { Card } from "react-materialize";
import { Col, Row } from "../Grid";



class CommentWall extends component {



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

