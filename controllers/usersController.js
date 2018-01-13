const db = require("../models") // !! this should access the models folder !!


// Defining methods for the usersController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body) //"req.body" should comprise the updated content
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  // },
  // findMatches: function(req, res) {
  //   db.User
  //     .findById({ _id: req.params.id })
  //     .then(user => {
  //       // there are languages on this user

  //       return db.User.find({
  //         _id: { $nin: user._id }
  //         type: { $in: ['mentor'] }
  //         languages: { $in: user.languages }
  //       });
  //     })
  //     .then(() => {

  //     });
  }
};
