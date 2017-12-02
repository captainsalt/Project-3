const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id     : Schema.Types.ObjectId,
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  seller: {type: Boolean, required: true},
  description: {type: String},
  category: {type: String},
  money: {type: Number},
//   supporters:[{ type: Schema.Types.ObjectId, ref: 'Supporters' }],
//   supportingThisCreator: [{ type: Schema.Types.ObjectId, ref: 'supportingThisCreator' }],
//   levels: [{ type: Schema.Types.ObjectId, ref: 'levels' }],
//   marketplace: [{ type: Schema.Types.ObjectId, ref: 'items' }],
//   pictures: [{ type: Schema.Types.ObjectId, ref: 'pictures' }],
  date: { type: Date, default: Date.now }
});

/**
 * Compare the passed password with the value in the database. A model method.
 *
 * @param {string} password
 * @returns {object} callback
 */
UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};


/**
 * The pre-save hook method.
 */
UserSchema.pre('save', function saveHook(next) {
  const user = this;

  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password')) return next();


  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

      // replace a password string with hash value
      user.password = hash;

      return next();
    });
  });

const User = mongoose.model("User", userSchema);

module.exports = User;