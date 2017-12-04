const router = require("express").Router();
const usersController = require("../../controllers/usersController");

//with .Router
//api/users 
router.route("/")
  .post(usersController.createUser)
  .get(usersController.getUsers);
//api/user/:id
router
.route("/:id")
  .get(usersController.getUser);

router
 .route("/:id/market")
  .post(usersController.createItem)
  .get(usersController.getItems);

module.exports = router;
