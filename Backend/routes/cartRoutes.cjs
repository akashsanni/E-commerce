const express = require('express')
const Cart = require('./../modals/cartModel.cjs')
const cartController = require('./../controllers/cartController.cjs')
const authcontroller = require('./../controllers/authController.cjs')
const router = express.Router();

router
.route('/')
.get(cartController.getAllcart)
.post( authcontroller.protect ,  cartController.addCart)
.delete(cartController.removeFromCart)
.patch( authcontroller.protect ,  cartController.updateCart)

router
.route('/:id')
.get(cartController.getCart)

module.exports = router




