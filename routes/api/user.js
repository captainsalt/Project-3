const router = require("express").Router();
const usersController = require("../../controllers/usersController");

//with .Router
//will get /api/users ?
router.route("/")
  .post(usersController.createUser)
  .get(usersController.getUsers);
//will get /api/user/:id
router
.route("/:id")
  .get(usersController.getUser);

module.exports = router;
