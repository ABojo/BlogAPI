const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.virtual('usernameLower', function () {
  return this.username.toLowerCase();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
