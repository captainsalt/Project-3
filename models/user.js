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
//   tier: [{ type: Schema.Types.ObjectId, ref: 'levels' }],
//   marketplace: [{ type: Schema.Types.ObjectId, ref: 'items' }],
//   pictures: [{ type: Schema.Types.ObjectId, ref: 'pictures' }],
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;