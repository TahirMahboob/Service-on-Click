const secretKey=require("../jwt/index.js")
const jwt=require("jsonwebtoken")
const generateToken = async (user) => {
   const payload={
    id:user._id,
    email:user.email,
    role:user.role,

   }
   console.log("jwt.sign(payload,secretKey,{expiresIn:",jwt.sign(payload,secretKey,{expiresIn:"5"}));
   return jwt.sign(payload,secretKey,{expiresIn:"5"})
  };
  module.exports = { generateToken };