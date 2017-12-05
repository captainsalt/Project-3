const User = require('../models/user');
const Market = require('../models/marketplace');
const _ = require('lodash');
const {ObjectID} = require('mongodb');


module.exports = {
//creates a new user
createUser (req, res) {
  var body = _.pick(req.body, ['email', 'username', 'password', 'seller', 'description']);
  var user = new User(body);

  user.save().then((doc) => {
    res.send(doc);
   }).catch((e) => {
    res.status(400).send(e);
   });
 },

//gets all users
getUsers (req, res) {
  User.find({}).then((users) => {
    res.send({users});
  }).catch((e) => {
    res.status(400).send(e);
  });
},

//checks to see if the id entered is valid. Will then find the user with matching id
getUser (req, res) {
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
},

createItem (req, res) {
  var id = req.params.id;
  var body = _.pick(['item', 'price', 'description']);
  //var item = new Market(body);
   if(!ObjectID.isValid(id)) {
       return res.status(404).send();
   }

   User.findById(id).then((user) => {
    
    if (!user) {
      return res.status(404).send();
    }

    //create new Market item
    var item = new Market(body);
    console.log("Item: "+item);
   
    user.market.push(item);
    //save all this crap. not sure if you can call done like this
    Promise.all([user.save(), item.save()]).then(() => {
      console.log("Creation Worked");

    }).catch((e) => {
      res.status(404).send()
    });
   
     res.send(item);
   }).catch((e) => {//end of User.find
      res.status(404).send();
   });//end of save
 },//end of createItem

 getItems (req, res) {
  var id = req.params.id;

  if(!ObjectID.isValid(id)) {
      return res.status(404).send();
   }

   User.findById(id)
   .populate('market')
   .then((user) => {
     console.log(user.market);  
     res.send(user.market);
   }).catch((e) => {//end of User.find
      res.status(404).send();
   }); 
 }

};//end of exports
