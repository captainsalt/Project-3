const mongoose = require("mongoose");
const validator = require('validator');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id     : Schema.Types.ObjectId,
  username: { 
    type: String,
    required: true,
    minlength: 3,
    unique: true
  },
  password: { 
  	type: String, 
  	required: true,
  	minlength: 6
  },
  email: { 
  	type: String,
    required: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  seller: {
  	type: Boolean, 
  	required: true,
  	default: true,
  },
  description: {
  	type: String,
    default: "I sell awesome stuff"
  },
  category: {
  	type: String,
  },
  money: {
  	type: Number,
  	default: 20000
  },
  market: [{type: Schema.Types.ObjectId, ref: "Market"}],
  tiers: [{type: Schema.Types.ObjectId, ref: "Tier"}],  
//   supporters:[{ type: Schema.Types.ObjectId, ref: 'Supporters' }],
//   supportingThisCreator: [{ type: Schema.Types.ObjectId, ref: 'supportingThisCreator' }],
//   pictures: [{ type: Schema.Types.ObjectId, ref: 'pictures' }],
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;