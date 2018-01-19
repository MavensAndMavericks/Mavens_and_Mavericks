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
    return axios.get("/api/users/" + id);
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
  // Gets the questionnaire with the given id (in the URL/PARAMS)
  getQuestionnaire: function(id) {
    return axios.get("/api/questionnaires/" + id);
  },
  // Gets ALL questionnaires
  getQuestionnaires: function() {
    return axios.get("/api/questionnaires/");
  },
  // Deletes the questionnaire with the given id
  deleteQuestionnaire: function(id) {
    return axios.delete("/api/questionnaires/" + id);
  },
  // Saves a questionnaire to the database
  saveQuestionnaire: function(questionnaireData) {
    return axios.post("/api/questionnaires/", questionnaireData);
  },

  // Saves a questionnaire to the database
  getMatches: function(id) {
    return axios.get("/api/questionnaires/" + id + "/matches");
  },

//////////////////
  // getProfile: function() {
  //   return axios.get("/api/mavens");
  // }

  // saveProfile: function() {
  //   return axios.post("/api/mavens/:id");
  // }


//////////////////
  // getMavens: function(questionnaireData) {
  //   return axios.post("/api/questionnaires", questionnaireData);
  // },

  // getMavericks: function(questionnaireData) {
  // return axios.post("/api/questionnaires", questionnaireData);
  // }
 }