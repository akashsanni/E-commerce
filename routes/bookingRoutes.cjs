const express = require('express')
const bookingController = require('../controllers/bookingController.cjs')
const authcontroller = require('../controllers/authController.cjs')
const router = express.Router();

router.get('/checkout-session/:productId', authcontroller.protect, bookingController.getCheckoutSession)
