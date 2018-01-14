const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router
 .route("/")
 .get(usersController.findAll)
 .post(usersController.create);

// Matches with "/api/users/:id"
router
 .route("/:id")
 .get(usersController.findById)
 .put(usersController.update)
 .delete(usersController.remove);

// Matches with "/api/users/:id/matches"
// router
//   .route('/:id/matches')
//   .get(questionnairesController.findMatches);

module.exports = router;