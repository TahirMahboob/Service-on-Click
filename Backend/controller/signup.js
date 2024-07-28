const {UserModel} = require('../modals');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createUser = async (req,res) => {
  const { userName, email, password } = req.body;
  const user = await UserModel.findOne({ email: email });
  if (user) {
    res.send({ status: 'failed', message: 'Email already exists' });
  } else {
    if (userName && email && password) {
      try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const doc = new UserModel({
          userName: userName,
          email: email,
          password: hashPassword,
        });
        await doc.save();
        // const saved_user = await UserModel.findOne({ email: email });
        // // Generate JWT Token
        // const token = jwt.sign(
        //   { userID: saved_user._id },
        //   process.env.JWT_SECRET_KEY,
        //   { expiresIn: '5d' }
        // );
        return res.status(201).send({
          // data: saved_user,
          status: 'success',
          message: 'User Succesfully Registered',
          // token: token,
          data:doc
        });
      } catch (error) {
        console.log(error);
        res.send({ status: 'failed', message: 'Unable to Register' });
      }
    } else {
      res.send({ status: 'failed', message: 'All fields are required' });
    }
  }
};

module.exports = { createUser };
