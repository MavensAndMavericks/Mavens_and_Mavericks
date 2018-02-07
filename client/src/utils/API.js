import axios from "axios";

export default {
//QUESTIONNAIRE
  // Gets the questionnaire with the given id (in the URL/PARAMS)
  getQuestionnaire: function(id) {
    console.log("getting the questionnaire with id");
    return axios.get("/api/questionnaires/" + id);
  },
  // Gets the questionnaire with the given github (in the URL/PARAMS)
  getQuestionnaireGithub: function(github) {
    return axios.get("/api/questionnaires/signin/" + github);
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

    return axios.post("/api/questionnaires", questionnaireData);

  // saveProjects: function(projectData){
  //   return axios.post("api/questionnaires", pr)
  },

  // Saves a project to the database
  saveProjects: function(id, type, github, projectName, projectData){
    return axios.post("api/questionnaires/" + id + "/" + type +"/session/" + github + "/" + projectName  + "/", projectData);
  },
  getProjects: function(id, type, github, projectName, projectData){
    return axios.get("api/questionnaires/" + id + "/" + type +"/session/" + github + "/" + projectName  + "/", projectData);
  },
  // Saves a Match to the database
  saveMatches: function(id, type) {
    return axios.get("/api/questionnaires/" + id + "/" + type + "/session/matches");
  },
  // Gets a Match from the database
  getMatches: function(id, type) {
    return axios.get("/api/questionnaires/" + id + "/" + type + "/session/matches");

  },

  getSessionQuestionnaireId: function(id, type) {
    return axios.get("/api/questionnaires/" + id + "/" + type + "/session");
  },
  deleteSessionQuestionnaireId: function(id, type) {
    return axios.delete("/api/questionnaires/" + id + "/" + type + "/session");
  },

// Gets the questionnaire with the given github (in the URL/PARAMS)
getQuestionnaireGithub: function(github) {
  console.log("this is the gibhub param = " + github);
  return axios.get("/api/questionnaires/signin/" + github);
},
/////////////////////
  // Gets a match for mavens from the the database
  // getMatches: function(id) {
  //   return axios.get("/api/questionnaires/" + id + "/matches");
  // },
////////////////////////
    // Gets a match for the mavericks from the database
  // getMaverickMatches: function(id) {
  //   return axios.get("/api/questionnaires/" + id + "/mentee/matches");
  // },
/////////////////////////

 // Gets the github profile projects for the given github
 getGithubProjects: function(github) {
  console.log("....");
  console.log(github);
   return axios.get("https://api.github.com/users/" + github + "/repos", function(req, res) { //"https://api.github.com/users/" + github + "/repos"
     console.log("CURRENT github repos" + res.data);
     console.log(res.status);
     res.json(res.data);
   })
 },

 // Gets the github profile PIC for the given github
 getGithubUrl: function(github) {
   console.log("github param = " + github);
   return axios.get("https://api.github.com/users/" + github, function(req, res) { //"https://api.github.com/users/" + github
     console.log("CURRENT github urls" + res.data);
     console.log(res.status);
     res.json(res.data);
   })
 },

 getProjectLanguages: function(github, projectName) {
   return axios.get("https://api.github.com/repos/" + github + "/" + projectName + "/languages", function(req, res) {
     console.log("CURRENT github project languages" + res.data);
     console.log(res.status);
     res.json(res.data);
   })
 },
//GET /repos/:owner/:repo/stats/commit_activity
  getProjectStats: function(github, projectName) {
   return axios.get("https://api.github.com/repos/" + github + "/" + projectName + "/stats/commit_activity", function(req, res) {
     console.log("CURRENT github project languages" + res.data);
     console.log(res.status);
     res.json(res.data);
   })
 },
  // Deletes the githubProjects project selected&deletedo on main web profile page
  deleteProject: function(id) {
    return axios.delete("/api/project/" + id);
  }

///////////////////////////////////////////////////////////////////////
// repo languages:  //"https://api.github.com/repos/wisnioa/amandaAwesome/languages //"https://api.github.com/repos/" + github + "/" + projectName + "/languages"
// repos:   //"https://api.github.com/users/" + github + "/repos"
 
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

 
  // Saves a project to the database
  // saveProjectsDB: function(projectData){
  //   return axios.post("api/questionnaires/projectName", projectData);
  // },
  // getProjectsDB: function(projectData){
  //   return axios.get("api/questionnaires/projectName", projectData);
  // },
  // // Deletes the githubProjects project selected&deletedo on main web profile page
  // deleteProject: function(id) {
  //   return axios.delete("/api/project/" + id);

 }