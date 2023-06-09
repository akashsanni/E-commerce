
const stripe = require('stripe')("secretKey")
const catchAsync = require('../utils/catchAsync.cjs')
const AppError = require('../utils/appError.cjs')
const Product = require("./../modals/product.cjs")
exports.getCheckoutSession =  catchAsync(async(req,res,next) =>{
    // get the currently purchased things
    const product = await Product.findById(req.params.productId)

    // Craete the checkout session 
    const session = await stripe.checkout.session.create({
        payment_method:['card'],
        success_url:"homeurl",
        cancel_url:"homeurl",
        customer_email:req.user.email,
        client_reference_id : req.params.tourId ,
        line_items:[
            {
                name:"name of the product",
                description:"some decription",
                images:["randome image from internet"],
                amount:'100',
                currency: "inr",
                quantity:3
            }
        ] 

    })

    // create session and send to the client

    res.status(200).json({
        status:"success",
        session
    })
})