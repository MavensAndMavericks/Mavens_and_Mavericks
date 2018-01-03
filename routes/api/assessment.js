const router = require("express").Router();
const assessmentsController = require("../../controllers/assessmentsController");

// Matches with "/api/books"
router
  .route("/")
  .get(assessmentsController.findAll)
  .post(assessmentsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(assessmentsController.findById)
  .put(assessmentsController.update)
  .delete(assessmentsController.remove);

module.exports = router;
