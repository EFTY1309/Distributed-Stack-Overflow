const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
   email: { type: String, required: true, unique: true },
   password: { type: String, required: true },
   username: { type: String, required: true, unique: true },
 });
 const User = mongoose.model('User', UserSchema); // Ensure this line is there
 module.exports = User;
