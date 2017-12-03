const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const {User} = require('./user');

var tierSchema = new Schema({
  tier1: {
  	price: Number,
  	description: String
  },
  tier2: {
 	  price: Number,
 	  description: String
  },
  tier3: {
 	  price: Number,
 	  description: String
  },
  owner: {
  	type: Schema.Types.ObjectId, ref: "User"
  }

});

var Tier = mongoose.model("Tier", tierSchema);
module.exports = {Tier};