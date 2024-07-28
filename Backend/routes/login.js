const loginController = require('../controller/login.js');
const express = require('express');
const { auth } = require('../middlewares/auth.js');
const router = express.Router();

router.post('/login', loginController.login);

router.post('/logOut', loginController.logOut);
router.post('/forgot', loginController.forgotPasswordService);
router.post('/reset', loginController.resetPassword);

router.post('/changePassword', auth('admin'), loginController.resetPassword);
module.exports = router;
