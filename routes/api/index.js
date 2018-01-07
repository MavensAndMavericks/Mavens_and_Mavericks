const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./users");
// const assessmentRoutes = require("./assessment");
// const oAuthRoutes = require("./oauth");


// const express = require("express");
// const app = express();

// Book routes
router.use("/books", bookRoutes);
router.use("/users", userRoutes);
// router.use("/assessment", assessmentRoutes);
// router.use("/auth", oAuthRoutes)

module.exports = router;


// module.exports = {
// 	router, app
// };
