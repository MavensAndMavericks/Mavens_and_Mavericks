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
  // Gets the questionnaire with the given github (in the URL/PARAMS)
  getQuestionnaireGithub: function(github) {
    return axios.get("/api/questionnaires/signin/"  + github);
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
    // return ({


    // "_id" : "5a60cc759fad410901e29878",
    // "firstName" : "test",
    // "lastName" : "fds",
    // "type" : "maverick",
    // "gitHub" : "fds",
    // "quote" : "fd",
    // "coded" : "fgds",
    // "profession" : "sf",
    // "schooling" : "sfd",
    // "impact" : "fds",
    // "reasons" : "sdfg",
    // "careerLevel" : "New Professional",
    // "industryExperience" : [ 
    //     "Security"
    // ],
    // "languages" : [ 
    //     "React"
    // ]



    // })
  },

//////////// MAKE THIS WORK ...SOON...
  // // Gets the github profile projects for the given github
  getGithubProjects: function(github) {
    return axios.get("https://api.github.com/users/" + github + "/repos", function(req, res) { //"https://api.github.com/users/" + github + "/repos"
      console.log("github repos" + res.data);
      console.log(res.status);
      res.json(res.data);
    })
  },

  // Gets the github profile PIC for the given github
  getGithubUrl: function(github) {
    return axios.get("https://api.github.com/users/" + github, function(req, res) { //"https://api.github.com/users/" + github
      console.log("github urls" + res.data);
      console.log(res.status);
      res.json(res.data);
    })
  },


///////////////////////////////////////////////////////////////////////
// $.ajax({
//  url: "https://api.github.com/users/wisnioa/repos",
//  jsonp: true,
//  method: "GET",
//  dataType: "json",
//  success: function(res) {
//    console.log(res)
//  }
// });

//////////////////

//get('https://api.github.com/users/' + username)
  //.then(function(response){
  //   console.log(response.data); // ex.: { user: 'Your User'}
  //   console.log(response.status); // ex.: 200
  // }); 

///////////////////////////////////////////////////////////////////
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