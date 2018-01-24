const router = require("express").Router();
const questionnairesController = require("../../controllers/questionnairesController");

// Matches with "/api/questionnaires"
router
    .route("/")
    .get(questionnairesController.findAll)
    .post(questionnairesController.createProfile);

// Matches with "/api/questionnaires/projects"
router
    .route('/projects')
    .post(questionnairesController.create);



/////////////////////////// SESSION STORAGE ROUTE: /////////////////////////////

// Matches with "/api/questionnaires/session" >> THIS IS FOR THE SESSIONSTORAGE of USER DATA!!
router.route('/session')
    .get(questionnairesController.getSessionQuestionnaireId)

////////////////////////////////////////////////////////////////////////////////



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

// Matches with "/api/questionnaires/:github"
router
    .route("/signin/:github")
    .get(questionnairesController.findOne)

// Matches with "/api/questionnaires/:id/matches"
router
    .route('/:id/:type/matches')
    .get(questionnairesController.findMatches);
    .post(questionnairesController.create);



module.exports = router;