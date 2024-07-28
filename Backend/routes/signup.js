
const signupController=require("../controller/signup.js")
const express=require("express")
const router=express.Router()
router.post("/register",signupController.createUser)

module.exports=router
 