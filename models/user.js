const mongoose = require("mongoose");
const validator = require('validator');
const Market = require('./marketplace');
const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
  	type: String,
    required: true,
    minlength: 1,
    unique: true,
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
  	default: false,
  },
  description: {
  	type: String,
    default: "I sell awesome stuff"
  },
  category: {
  	type: String,
    required: true,
    default: "Art"
  },
  money: {
  	type: Number,
  	default: 20000
  },
  // market: [{type: Schema.Types.ObjectId, ref: "Market"}],
  //tiers: [{type: Schema.Types.ObjectId, ref: "Tier"}],  
//   supporters:[{ type: Schema.Types.ObjectId, ref: 'Supporters' }],
//   supportingThisCreator: [{ type: Schema.Types.ObjectId, ref: 'supportingThisCreator' }],
//   pictures: [{ type: Schema.Types.ObjectId, ref: 'pictures' }],
  date: { type: Date, default: Date.now }
});

// Pre-save of user to database, hash password if password is modified or new
// userSchema.pre('save', function(next) {  
//   const user = this,
//         SALT_FACTOR = 5;

//   if (!user.isModified('password')) return next();

//   bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
//     if (err) return next(err);

//     bcrypt.hash(user.password, salt, null, function(err, hash) {
//       if (err) return next(err);
//       user.password = hash;
//       next();
//     });
//   });
// });

// // Method to compare password for login
// userSchema.methods.comparePassword = function(candidatePassword, cb) {  
//   bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//     if (err) { return cb(err); }

//     cb(null, isMatch);
//   });
// }

const User = mongoose.model("User", userSchema);

module.exports = User;