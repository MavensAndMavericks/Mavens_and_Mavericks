const router = require("express").Router();
const questionnairesController = require("../../controllers/questionnairesController");

// Matches with "/api/books"
router
  .route("/")
  .get(questionnairesController.findAll)
  .post(questionnairesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(questionnairesController.findById)
  .put(questionnairesController.update)
  .delete(questionnairesController.remove);

module.exports = router;
