const router = require("express").Router();

const userRoutes = require("./user");
//const marketRoutes = require("./market");


router.use("/users", userRoutes);
//router.use("/market", marketRoutes);

module.exports = router;
