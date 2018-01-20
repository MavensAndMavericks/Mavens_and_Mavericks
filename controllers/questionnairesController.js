const db = require("../models") // !! this should access the models folder !!


// Defining methods for the assessmentsController
module.exports = {
 findAll: function(req, res) {
   db.Questionnaire
     .find(req.query)
     .sort({ date: -1 })
     .then(dbProfile => res.json(dbProfile))
     .catch(err => res.status(422).json(err));
 },
 findById: function(req, res) {
   db.Questionnaire
     .findById(req.params.id)
     .then(dbProfile => {
        console.log('QUERYYYY', req.params.id);
        console.log(dbProfile)
        res.json(dbProfile);
      })
     .catch(err => res.status(422).json(err));
 },
 create: function(req, res) {
   db.Questionnaire
     .create(req.body)
     .then(dbProfile => res.json(dbProfile))
     .catch(err => res.status(422).json(err));
 },
 update: function(req, res) {
   db.Questionnaire
     .findOneAndUpdate({ _id: req.params.id }, req.body)
     .then(dbProfile => res.json(dbProfile))
     .catch(err => res.status(422).json(err));
 },
 remove: function(req, res) {
   db.Questionnaire
     .findById({ _id: req.params.id })
     .then(dbProfile => dbProfile.remove())
     .then(dbProfile => res.json(dbProfile))
     .catch(err => res.status(422).json(err));
 },

  findMatches: function(req, res) {
    db.Questionnaire
      .findById({ _id: req.params.id })
      .then(users => {
        return db.User.find({
          _id: { $nin: user._id },
          type: { $in: [!user.type] }, // we could replace "!user.type" with >> ["maverick"] or ["maven"], depending on type/occasion
          languages: { $in: user.languages }
        });
      })
      // .then(() => {


     // });
 }
};


//MATCHING SWITCH CASE
// findMatches: function(req, res) {
//     db.Questionnaire
//         .findById({ _id: req.params.id })
//         .then(dbProfile => {
//             return dbProfile.find({
//                 _id: { $nin: dbProfile._id },
//                 type: { $nin: [dbProfile.type] },
//                 if (dbProfile.type === "maven") {

//                     switch (dbProfile.careerLevel) {
//                         case "New Professional":
//                             //MATCH WITH COLLEGE USER
//                             return dbProfile.findAll({
//                                   careerLevel: { $in: [dbProfile.careerLevel.college]}
//                                 })

//                             break;
//                         case "Professional 5+":
//                             //MATCH WITH NEW PROFESSIONAL AND COLLEGE USERS 
//                               return dbProfile.findAll({
//                                   careerLevel: { $in: ["new professional"]}
//                                 })


//                             break;
//                         case "Expert":
//                             //MATCH WITH PROFESSIONAL 5+, NEW PROFESSIONAL AND COLLEGE USERS 
//                             break;

//                     } else if (dbProfile.type === "maverick") {
//                         switch (dbProfile.careerLevel) {
//                             case "College":
//                                 //MATCH WITH PROFESSIONAL 5+, NEW PROFESSIONAL AND EXPERT USERS 
//                                 break;
//                             case "New Professional":
//                                 //MATCH WITH PROFESSIONAL 5+ AND EXPERT USERS 
//                                 break;
//                             case "Professional 5+":
//                                 //MATCH WITH EXPERT
//                                 break;

//                         }

//                     }

//                 }

//                 languages: { $in: dbProfile.languages },
//                 industry: { $in: }
//             });
//         })
//     // .then(() => {


//     // });
// }
// };







