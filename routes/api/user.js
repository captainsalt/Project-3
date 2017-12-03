const router = require("express").Router();
const usersController = require("../../controllers/usersController");


//with .Router
router.route("/api/users")
  .post(usersController.createUser)
  .get(usersController.getUsers);

 router.route("/:id")
  .get(usersController.getUser)

module.exports = router;
