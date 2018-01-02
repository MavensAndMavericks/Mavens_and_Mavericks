const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./users");
const oAuthRoutes = require("./oauth");

// Book routes
router.use("/books", bookRoutes);
router.use("/users", userRoutes);
router.use("/auth", oAuthRoutes)

module.exports = router;
