const router = require("express").Router();
const usersController = require("../../controllers/usersController");

//with .Router
//api/users 
router.route("/")
  .get(usersController.getUsers)

  //api/users/signup
router.route("/signup")
  .post(usersController.createUser);

// api/users/:category Finds users by description
router
 .route("/c/:category")
  .get(usersController.getCategory);

//api/users/:id Gets one user by id
router
.route("/:id")
  .get(usersController.getUser);
  
//api/users/:id
router
 .route("/:id/market")
  .get(usersController.getItems)
  .post(usersController.createItem);




module.exports = router;
