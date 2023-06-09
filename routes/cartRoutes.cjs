const express = require('express')
const Cart = require('./../modals/cartModel.cjs')
const cartController = require('./../controllers/cartController.cjs')
const authcontroller = require('./../controllers/authController.cjs')
const router = express.Router();

router
.route('/')
.get( authcontroller.protect , cartController.getCart)



router
.route('/:productId')
.post( authcontroller.protect ,cartController.addCart)
.patch( authcontroller.protect ,  cartController.updateCart)
.delete( authcontroller.protect , cartController.removeFromCart)
module.exports = router




