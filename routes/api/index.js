const router = require("express").Router();
const userRoutes = require("./users");
const questionnaireRoutes = require("./questionnaires");
// const oAuthRoutes = require("./oauth");


// Page routes
router.use("/users", userRoutes);
router.use("/questionnaires", questionnaireRoutes);
// router.use("/auth", oAuthRoutes)

module.exports = router;