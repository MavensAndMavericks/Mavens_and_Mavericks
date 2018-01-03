const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./users");
const assessmentRoutes = require("./assessment");
const oAuthRoutes = require("./oauth");

// Book routes
router.use("/books", bookRoutes);
router.use("/users", userRoutes);
router.use("/assessment", assessmentRoutes);
app.use("/auth", oAuthRoutes)

module.exports = {
	router, app
};
