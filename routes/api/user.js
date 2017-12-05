const router = require("express").Router();
const usersController = require("../../controllers/usersController");

//with .Router
//api/users 
router.route("/")
  .get(usersController.getUsers);

// api/users/signup
router.route("/signup")
.post(usersController.createUser);

// api/users/login 
// router.route("/login")
// .get(usersController.);

//api/user/:id
router
.route("/:id")
  .get(usersController.getUser);

router
 .route("/:id/market")
  .post(usersController.createItem)
  .get(usersController.getItems);

module.exports = router;
