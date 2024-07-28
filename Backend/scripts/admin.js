const { UserModel } = require('../modals/index.js');
const bcrypt = require('bcrypt');

const createAdmin = async (req, res) => {
  try {
    const existingAdmin = await UserModel.findOne({ email: 'admin@gmail.com' });
    if (!existingAdmin) {
      const createdNewAdmin = new UserModel({
        userName: 'Admin',
        email: 'admin@gmail.com',
        password: await bcrypt.hash('admin', 10),
        role: 'admin',
      });
      await createdNewAdmin.save();
      console.log('Admin Created Successfully');
    } else {
      console.log('Admin already exist');
    }
  } catch (error) {
    res.status(409)
      .send({ message: `error Admin not created ${error.message}` });
  }
};
module.exports = { createAdmin };
