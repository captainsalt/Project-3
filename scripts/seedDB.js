const mongoose = require("mongoose");
const User = require('../models/user');
const Market = require('../models/marketplace');
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Project3-Final",
  {
    useMongoClient: true
  }
);

const userSeed = [
  {
    username: "The Dead ",
    password: "Stephen King",
    email: "hello@hello.com",
    seller: true,
    description: "I am an avid painter that loves to paint little ponies",
    category:"Paintings",
    money: 2000,
    market: [],
    pictureUrl: "http://lorempixel.com/200/200/people/",
    date: new Date(Date.now())
  },
  {
    username: "ArtIsCool",
    password: "Stephen King",
    email: "hello2@hello2.com",
    seller: true,
    description: "Will paint for food",
    category:"Paintings",
    money: 2000,
    market: [],
    pictureUrl: "http://lorempixel.com/200/200/people/",
    date: new Date(Date.now())
  }  
];

User
  .remove({})
  .then(() => User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });