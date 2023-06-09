const catchAsync = require('../utils/catchAsync.cjs')
const AppError = require('../utils/appError.cjs')
const Review = require('./../modals/reviewModel.cjs')
exports.getReviewsByTourId =catchAsync(async(req, res , next) => {
    console.log(req.params)
})


exports.getAllReview = catchAsync(async(req , res , next) => {
    const reviews = await Review.find();
    console.log(reviews)
    res.status(201).json({
        status:"success",
        data:reviews
    })
})
exports.createReview =catchAsync(async(req, res , next) => {
    console.log(Review)
    const review = await Review.create(req.body)
    await review.save()
    res.status(201).json({
        status:"success",
        data:review
    })

})

