const User = require('../models/user');
const _ = require('lodash');
const {ObjectID} = require('mongodb');

//creates a new user
exports.createUser = (req, res) => {
  var body = _.pick(req.body, ['email', 'username', 'password', 'seller', 'description']);
  var user = new User(body);

  user.save().then((doc) => {
    res.send(doc);
   }).catch((e) => {
    res.status(400).send(e);
   });
 };

//gets all users
exports.getUsers = (req, res) => {
  User.find({}).then((users) => {
    res.send({users});
  }).catch((e) => {
    res.status(400).send(e);
  });
};

//checks to see if the id entered is valid. Will then find the user with matching id
exports.getUser = (req, res) => {
  var id = req.params.id;

   if(!ObjectID.isValid(id)) {
    return res.status(404).send();
   }

   User.findById(id).then((user) => {
    
    if (!user) {
      return res.status(404).send();
    }

    res.send({user});
   }).catch((e) => {
      res.status(404).send();
   });
};

//const db = require("../models");

// Defining methods for the booksController
// module.exports = {
//   // findById: function(req, res) {
//   //   db.User
//   //     .findById(req.params.id)
//   //     .then(dbModel => res.json(dbModel))
//   //     .catch(err => res.status(422).json(err));
//   // },
//   // findByEmail: function(req, res) {
//   //   db.User
//   //     .findByEmail(req.params.email)
//   //     .then(dbModel => res.json(dbModel))
//   //     .catch(err => res.status(422).json(err));
//   // },
//   create: function(req, res) {
//     db.User
//       .create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
// };
