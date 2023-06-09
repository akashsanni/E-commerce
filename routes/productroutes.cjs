const express = require('express');
const productController = require('../controllers/productcontroller.cjs');
const authController = require('../controllers/authController.cjs')
const reviewController = require('./../controllers/reviewController.cjs')
const router = express.Router();




router
.route('/reviews')
.get(reviewController.getAllReview)

router
.route('/tag/:tagId')
.get(productController.getByTags)

router
.route('/')
.get(productController.getAllproducts)
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
.delete(authController.protect , authController.restrictTo('admin' , 'lead-guide') ,productController.deleteTour)

router
.route('/tag/')
.get(productController.getByTags)


router
.route("/:productId/reviews")
.get(authController.protect , reviewController.getReviewsByTourId)
.post(authController.protect , reviewController.createReview )

module.exports = router