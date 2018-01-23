const router = require("express").Router();
const questionnairesController = require("../../controllers/questionnairesController");

// Matches with "/api/questionnaires"
router
    .route("/")
    .get(questionnairesController.findAll)
    .post(questionnairesController.create);

// Matches with "/api/questionnaires/:id"
router
    .route("/:id")
    .get(questionnairesController.findById)
    // .get(function(req, res, next) {
    //     console.log("get route hit for ID - BATMANROX no for real");
    //     questionnairesController.findById
    // })
    .put(questionnairesController.update)
    .delete(questionnairesController.remove);

// Matches with "/api/questionnaires/:id/matches"
router
    .route('/:id/matches')
    .get(questionnairesController.findMatches);

module.exports = router;