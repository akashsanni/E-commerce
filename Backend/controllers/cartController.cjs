const User = require('../modals/userModel.cjs')
const catchAsync = require('../utils/catchAsync.cjs')
const AppError = require('../utils/appError.cjs')



// exports.addToCart = catchAsync(async(req,res,next) => {


//       // 1 find the User 
//       console.log(req.user);
//       const user = await User.findById(req.user._id)
//       // const existingCart =  user.carts.find((cart) => cart.product.equals());
//       const existingCart = user.carts.find((cart) => cart.product.equals(req.params.productId));
//       if (existingCart) {
//         existingCart.count += 1;
//       }
//       else{
//         user.carts.push({
//           product: req.params.productId,
//           count: 1,
//         })
//       }

//       // 2 SAVE USER
//       await user.save({validateBeforeSave:false});
//       res.status(200).json({
//         status:"success",
        
//       })
      
//   })


exports.getCart = catchAsync(async(req, res , next) =>{
  const cart = await req.user.populate('carts.product')
  console.log(cart)


})


// add to cart is working 
exports.addToCart = catchAsync(async(req,res,next)=>{
  const user = req.user; 
  const existingCart = user.carts.find((cart) => cart.product.equals(req.params.productId));
if (existingCart) {
  existingCart.count += 1;
}else{
  user.carts.push({
    product: req.params.productId,
    count: 1,
  })
}
 
  await user.save({validateBeforeSave:false});


  res.status(201).json({
    status:"success",
    cart
  })

})

// updating my cart 

exports.updateCart = catchAsync(async(req,res,next)=>{
  const user = req.user; 
  const count = req.body.count

  const existingCart = user.carts.find((cart) => cart.product.equals(req.params.productId))
  existingCart.count = count;
  await user.save({validateBeforeSave:false});
  res.status(201).json({
    status:"success",

  })

})

// Deleting from my cart 

exports.deleteCart = catchAsync(async(req,res,next)=>{
  const user = req.user; 

  const newCart = user.carts.filter((cart) => !cart.product.equals(req.params.productId))

  user.carts = newCart
  await user.save({validateBeforeSave:false});
  
  res.status(201).json({
    status:"success",
    data: newCart
  })

})
  
  

  