// READ PLEASE: !! THIS EXAMPLE WAS TAKEN DIRECTLY FROM THE "BOOKS" PAGE EXAMPLE!! >> ONLY changed out the "books" name to keep from bundling incorreclty.. !!

//React Library imports:
import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

//Componenet imports:
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn, QuestionsMentor } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import Nav1 from "../../components/Nav1";

//=================================================================================
class QuestionnaireMentor extends Component {
  state = {
    books: [],
    firstName: "",
    lastName: "",
    bio1:"",
    bio2:"",
    bio3:"",
    bio4:"",
    bio5:"",
    bio6:"",
    bio7:"",
    radioquestions: ""
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Nav1/>
        <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">Welcome to Maverns and Mavericks!</h1>
            </Jumbotron>
            </Col>
          </Row>

          
        <Row>
        <form>
          <Col size="md-6">
            
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="First Name"
              />
            </Col>
              <Col size="md-6">
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
                placeholder="Last Name"
              />
              </Col>
            </form>          
 
        </Row>

        <Row>
          <Col size="md-12">
            <form>

              <h5>1. What is your GitHub Link?</h5>
                <Input
                value={this.state.bio1}
                onChange={this.handleInputChange}
                name="bio1"
              />

                <h5>2. What is your favorite inspirational quote?</h5>
                <Input
                value={this.state.bio2}
                onChange={this.handleInputChange}
                name="bio2"
              />

              <h5>3. How extensively have you coded in the past?</h5>
                <Input
                value={this.state.bio3}
                onChange={this.handleInputChange}
                name="bio3"
              />

              <h5>4. What is your current profession?</h5>
                <Input
                value={this.state.bio4}
                onChange={this.handleInputChange}
                name="bio4"
              />

              <h5>5. What is your previous schooling?</h5>
                <Input
                value={this.state.bio5}
                onChange={this.handleInputChange}
                name="bio5"
              />

              <h5>6. Has mentorship impacted your professional success, and if so, how?</h5>
              <TextArea
                value={this.state.bio6}
                onChange={this.handleInputChange}
                name="bio6"
              />

              <h5>7. What are you reasons for mentorship?</h5>
              <TextArea
                value={this.state.bio7}
                onChange={this.handleInputChange}
                name="bio7"
              />

              <QuestionsMentor
                value={this.state.radioquestions}
                onChange={this.handleInputChange}
                name="radioquestions"
              />

              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>

            </form>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">Why have a mentor?</h1>
            </Jumbotron>
            
            {this.state.books.length ? (
              <List className="text-center">
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3 className="text-center">No Results to Display</h3>
            )}

          </Col>
        </Row>

      </Container>
      </div>
    );
  }
}

export default QuestionnaireMentor;
