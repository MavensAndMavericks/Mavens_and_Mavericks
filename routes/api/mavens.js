const router = require("express").Router();
const questionnairesController = require("../../controllers/questionnairesController");

// Matches with "/api/mavens"
router
  .route("/")
  .get(questionnairesController.findAll)
  .post(questionnairesController.create);

// Matches with "/api/mavens/:id"
router
  .route("/:id")
  .get(questionnairesController.findById)
  .put(questionnairesController.update)
  .delete(questionnairesController.remove);

// Matches with "/api/mavens/:id/matches"
  router
  .route('/:id/matches')
  .get(questionnairesController.findMatches);

module.exports = router;