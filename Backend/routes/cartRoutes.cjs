const express = require('express') 
const authController = require('../controllers/authController.cjs')
const cartController = require('../controllers/cartController.cjs')
const Router = express.Router();






Router
.route('/:productId')
.post(authController.protect , cartController.addToCart)
.delete(authController.protect ,cartController.deleteCart)
.patch(authController.protect , cartController.updateCart )
Router
.route("/")
.get(authController.protect , cartController.getCart )

.delete(authController.protect)

module.exports  = Router