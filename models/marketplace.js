const {ObjectID} = require('mongodb');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = require('./user');

var marketPlaceSchema = new Schema({
  item: {
  	type: String,
    required: true,
  	//default: "Item for sale"
  },
  price: {
 	 type: Number,
   required: true,
   //default: "50.00"
  },
  description: {
 	 type: String,
   required: true,   
 	 //default: "Description of item"
  },
  pictureUrl: {
   type: String,
   //required: true,   
   //default: "http://lorempixel.com/100/100/"
  },
  items: {
  	type: Schema.Types.ObjectId, ref: "User"
  }

});

var Market = mongoose.model("Market", marketPlaceSchema);
module.exports = Market;