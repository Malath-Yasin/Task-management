// models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  // _id: mongoose.Schema.Types.ObjectId,

  password: { type: String, required: true },
  token: {type:String },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
