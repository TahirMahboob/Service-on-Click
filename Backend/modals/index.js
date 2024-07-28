const mongoose = require('mongoose');
// Define the user schema
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },

  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
});

const refreshTokenSchema = new mongoose.Schema(
  {
    token: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const RefreshTokens = mongoose.model('RefreshToken', refreshTokenSchema);

const UserModel = mongoose.model('User', userSchema);
module.exports = { UserModel, RefreshTokens };
