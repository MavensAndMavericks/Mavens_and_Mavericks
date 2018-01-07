//React Library imports:
//=============================
import React, { Component } from "react";
import { Link } from "react-router-dom";

//API Routing Import:
//=============================
import API from "../../utils/API";

//Componenet imports:
//=============================
import Nav from "../../components/Nav";
import Parallax1 from "../../components/Parallax1";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";


//=================================================================================
class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
   API.getBooks()
     .then(res =>
       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
     )
     .catch(err => console.log(err));
 };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
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
      <Container fluid>
        <Nav />
        <br/>

        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">Welcome to Maverns and Mavericks!</h1>
            </Jumbotron>
            <Parallax1/>
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
    );
  }
}

export default Books;
