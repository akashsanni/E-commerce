const express = require('express');

const Router = express.Router();
const authController = require('../controllers/authController.cjs')
const userController = require('../controllers/useController.cjs');

Router.get('/' , userController.getAllusers);

Router.post('/signup', authController.module.signup)
Router.post('/login', authController.module.login)
Router.post('/reset', authController.module.resetPassword)
Router.post('/forgotpassword', authController.module.forgotPassword)

module.exports = Router;
