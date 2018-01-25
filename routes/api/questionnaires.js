const router = require("express").Router();
const questionnairesController = require("../../controllers/questionnairesController");

// Matches with "/api/questionnaires"
router
    .route("/")
    .get(questionnairesController.findAll)
    .post(questionnairesController.createProfile);

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

// Matches with "/api/questionnaires/signin/:github"
router
    .route("/signin/:github")
    .get(questionnairesController.findOne);


///////////////////////////////////////////////////////////////////////////////
/////////////////////////// SESSION STORAGE ROUTE: ////////////////////////////

// Matches with "/api/questionnaires/:id/session" >> THIS IS FOR THE SESSIONSTORAGE of USER DATA!!
router
    .route('/:id/:type/session')
    .get(questionnairesController.getSessionQuestionnaireId)
    .delete(questionnairesController.logOut);

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


// Matches with "/api/questionnaires/:id/:type/session/matches"
router
    .route('/:id/:type/session/:matches')
    .get(questionnairesController.findMatches)
    .post(questionnairesController.create);

// Matches with "/api/questionnaires/:id/:type/session/:github/:projectname"
router
    .route('/:id/:type/session/:github/:projectname')
    .post(questionnairesController.create)
    .get(questionnairesController.findAll);

module.exports = router;