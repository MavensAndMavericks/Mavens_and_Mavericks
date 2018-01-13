const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/books"
router
  .route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

router
  .route('/:id/matches')
  .get(usersController.findMatches)

module.exports = router;
