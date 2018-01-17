const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./users");
const questionnaireRoutes = require("./questionnaires");
// const oAuthRoutes = require("./oauth");


// Page routes
router.use("/books", bookRoutes);
router.use("/users", userRoutes);
router.use("/questionnaires", questionnaireRoutes);
// router.use("/auth", oAuthRoutes)

module.exports = router;