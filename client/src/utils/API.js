import axios from "axios";

export default {
//BOOKS
  // Gets ALL books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

//USERS
  // Gets ALL users
  getUsers: function() {
    return axios.get("/api/users");
  },

  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/welcomeMaven/" + id);
  },
  
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },

//QUESTIONNAIRE
  // Gets ALL questionnaires
  getQuestionnaires: function() {
    return axios.get("/api/questionnaires");
  },
  // Gets the questionnaire with the given id
  getQuestionnaire: function(id) {
    return axios.get("/api/questionnaires/" + id);
  },
  // Deletes the questionnaire with the given id
  deleteQuestionnaire: function(id) {
    return axios.delete("/api/questionnaires/" + id);
  },  

  // Saves a questionnaire to the database
  saveQuestionnaire: function(questionnaireData) {
    return axios.post("/api/questionnaires", questionnaireData);
  },

  ///////////////////////////

  // postMavenProfile: function( id ) {
  //   return axios.get("/welcomeMaven/" + id);
  // },

  // postMaverickProfile: function( id, stateId ) {
  // return axios.get("/welcomeMaverick/" + id, stateId);
  // }


 }


// app.get("/api/:characters?", function(req, res) {
//   var chosen = req.params.characters;