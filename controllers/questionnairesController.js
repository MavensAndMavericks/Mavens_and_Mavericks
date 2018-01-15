const db = require("../models") // !! this should access the models folder !!


// Defining methods for the assessmentsController
module.exports = {
 findAll: function(req, res) {
   db.Questionnaire
     .find(req.query)
     .sort({ date: -1 })
     .then(dbModel => res.json(dbModel))
     .catch(err => res.status(422).json(err));
 },
 findById: function(req, res) {
   db.Questionnaire
     .findById(req.params.id)
     .then(dbModel => res.json(dbModel))
     .catch(err => res.status(422).json(err));
 },
 create: function(req, res) {
   db.Questionnaire
     .create(req.body)
     .then(dbModel => res.json(dbModel))
     .catch(err => res.status(422).json(err));
 },
 update: function(req, res) {
   db.Questionnaire
     .findOneAndUpdate({ _id: req.params.id }, req.body)
     .then(dbModel => res.json(dbModel))
     .catch(err => res.status(422).json(err));
 },
 remove: function(req, res) {
   db.Questionnaire
     .findById({ _id: req.params.id })
     .then(dbModel => dbModel.remove())
     .then(dbModel => res.json(dbModel))
     .catch(err => res.status(422).json(err));
 },

  findMatches: function(req, res) {
    db.User
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