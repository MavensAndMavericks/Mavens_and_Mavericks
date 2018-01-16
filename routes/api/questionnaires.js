const router = require("express").Router();
const questionnairesController = require("../../controllers/questionnairesController");

// Matches with "/api/qusetionnaires"
router
  .route("/")
  .get(questionnairesController.findAll)
  .post(questionnairesController.create);
  .get(questionnairesController.findByGithub);

// Matches with "/api/questionnaires/:id"
router
  .route("/:id")
  .get(questionnairesController.findById)
  .put(questionnairesController.update)
  .delete(questionnairesController.remove);

// Matches with "/api/questionnaires/:id/matches"
  router
  .route('/:id/matches')
  .get(questionnairesController.findMatches);

module.exports = router;
