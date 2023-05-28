const User = require('../modals/userModel.cjs')
const catchAsync = require('../utils/catchAsync.cjs')
const AppError = require('../utils/appError.cjs')



exports.addToCart = catchAsync(async(req,res,next) => {


      // 1 find the User 
      console.log(req.user);
      const user = await User.findById(req.user._id)
      // const existingCart =  user.carts.find((cart) => cart.product.equals());
      const existingCart = user.carts.find((cart) => cart.product.equals(req.params.productId));
      if (existingCart) {
        existingCart.count += 1;
      }
      else{
        user.carts.push({
          product: req.params.productId,
          count: 1,
        })
      }

      // 2 SAVE USER
      await user.save({validateBeforeSave:false});
      res.status(200).json({
        status:"success",
        
      })
  })

  exports.updateCart = (req, res, next) => {

  }

  exports.deleteFromCart = (req, res, next) => {

  }


  