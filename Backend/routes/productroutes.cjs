const express = require('express');
const productController = require('../controllers/productcontroller.cjs');
const router = express.Router();


router
.route('/')
.get(productController.getproducts)
.post(productController.postproduct)


router
.route('/categories')
.get(productController.getAllCategories)
module.exports = router

router
.route('/categories/:id')
.get(productController.getByCategories)
module.exports = router

router
.route('/:id')
.get(productController.getproduct)
.patch(productController.updateproduct)




