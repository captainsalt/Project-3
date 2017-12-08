const router = require("express").Router();
const usersController = require("../../controllers/usersController");

//with .Router
//api/users 
router.route("/")
  .get(usersController.getUsers)
  .post(usersController.createUser);

// api/users/signup
// router.route("/signup")
// .post(usersController.createUser);

// api/users/login 
// router.route("/login")
// .get(usersController.);

//api/users/:category Finds users by description
router
 .route("/:category")
  .get(usersController.getCategory);

//api/users/:id Gets one user by id
router
.route("/:id")
  .get(usersController.getUser);

//api/user/:id
router
 .route("/:id/market")
  .post(usersController.createItem)
  .get(usersController.getItems);

module.exports = router;
