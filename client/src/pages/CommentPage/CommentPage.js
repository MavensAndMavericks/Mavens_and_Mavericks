
//Imports
import React, { Component } from "react";
import Nav1 from "../../components/Nav2";
import CommentForm from "../../components/CommentForm";
import CommentWall from "../../components/CommentWall";
import SignOut from "../../components/SignOut";
import Footer from "../../components/Footer";




class CommentPage extends Component {



    render() {
        return
        <div>

            <Nav1 />
            <Signout />

            <CommentWall />


            <CommentForm />

            <Footer />




        </div>


    }




}

