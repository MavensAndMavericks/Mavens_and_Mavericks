const router = require("express").Router();
const bookRoutes = require("./books");
const userSchema = require("./users")

// Book routes
router.use("/books", bookRoutes);
router.use("/users", userSchema);

module.exports = router;
