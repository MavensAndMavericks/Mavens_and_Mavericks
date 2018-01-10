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
//import Jumbotron from "../Jumbotron";
import { List, ListItem } from "../List";
import DeleteBtn from "../DeleteBtn";
import "./ProfileBio.css";


//=================================================================================
class ProfileBio extends Component {
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
		return(
			<div className="profile-bio">	
				<Container className="container profile-bio">

			    	<Row>
				    	<Col size="sm-12" className="board-header" >
				    		<div>
						    	<h3 className="text-center">ProfileBio</h3>
						    </div>	   
						</Col>
					</Row>

					<Row>
						<Col size="sm-4">
							<aside>
						    	<img className="img-responsive" src={"http://placehold.it/300x300&text=slide1"} alt="Github Profile Pic"/>
						    </aside>	
						</Col>
						<Col size="sm-8">
							<article>
						    	<h2>First Name {this.state.firstName} <span>Last Name {this.state.LastName} </span></h2>
						    	<h3>Github Link {this.state.gitHub} </h3>
						    	<h4>Industries of Interest {this.state.industries} </h4>
						    	<h4>Languages {this.state.languages} </h4>
						    	<h4>Reason for Mentorship {this.state.impact} </h4>
						   	</article>	
						</Col>
					</Row>

					<Row>
						<Col size="md-12">

							<article>
						    	<h4>Tester (Books):
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
								</h4>
						    </article>	

						</Col>
				   	</Row>

				</Container>
			</div>
		);
	}
}
	
export default ProfileBio;

// //=================================================================================
// class Books extends Component {
//   state = {
//     books: [],
//     title: "",
//     author: "",
//     synopsis: ""
//   };

//   componentDidMount() {
//     this.loadBooks();
//   }

//   loadBooks = () => {
//    API.getBooks()
//      .then(res =>
//        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
//      )
//      .catch(err => console.log(err));
//  };

//   deleteBook = id => {
//     API.deleteBook(id)
//       .then(res => this.loadBooks())
//       .catch(err => console.log(err));
//   };  

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.title && this.state.author) {
//       API.saveBook({
//         title: this.state.title,
//         author: this.state.author,
//         synopsis: this.state.synopsis
//       })
//         .then(res => this.loadBooks())
//         .catch(err => console.log(err));
//     }
//   };

//   render() {
//     return (
//       <Container fluid>
//         <Nav />
//         <br/>

//         <Row>
//           <Col size="md-12">
//             <Jumbotron>
//               <h1 className="text-center">Welcome to Maverns and Mavericks!</h1>
//             </Jumbotron>
//             <Parallax1/>
//           </Col>
//         </Row>

//         <Row>
//           <Col size="md-12">
//             <Jumbotron>
//               <h1 className="text-center">Why have a mentor?</h1>
//             </Jumbotron>
            

//             {this.state.books.length ? (
//               <List className="text-center">
//                 {this.state.books.map(book => (
//                   <ListItem key={book._id}>
//                     <Link to={"/books/" + book._id}>
//                       <strong>
//                         {book.title} by {book.author}
//                       </strong>
//                     </Link>
//                     <DeleteBtn onClick={() => this.deleteBook(book._id)} />
//                   </ListItem>
//                 ))}
//               </List>
//             ) : (
//               <h3 className="text-center">No Results to Display</h3>
//             )}

//           </Col>
//         </Row>

//       </Container>
//     );
//   }
// }

// export default Books;
