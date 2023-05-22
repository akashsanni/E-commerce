const express = require('express');

const Router = express.Router();
const authController = require('../controllers/authController.cjs')
const userController = require('../controllers/useController.cjs');

Router.get('/' ,  authController.module.protect, userController.getAllusers );

Router.patch('/updateme' , authController.module.protect , userController.updateMe)

Router.post('/signup', authController.module.signup)
Router.post('/login', authController.module.login)
Router.post('/reset', authController.module.resetPassword)
Router.post('/forgotpassword', authController.module.forgotPassword)

module.exports = Router;
