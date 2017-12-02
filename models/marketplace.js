const mongoose = require("mongoose");
const validator = require('validator');
const Schema = mongoose.Schema;

const {User} = require('./user');

var marketPlaceSchema = new Schema({
  item: {
  	type: String,
  	default: "Item for sale"
  },
  price: {
 	 type: Number,
   default: "50.00"
  },
  description: {
 	 type: String,
 	 default: "Description of item"
  },
  owner: {
  	type: Schema.Types.ObjectId, ref: "User"
  }

});

var Market = mongoose.model("Market", marketPlaceSchema);
module.exports = {Market};