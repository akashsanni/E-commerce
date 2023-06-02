
const catchAsync = require('../utils/catchAsync.cjs')
const AppError = require('../utils/appError.cjs')
const Cart = require('./../modals/cartModel.cjs')
const User = require('./../modals/userModel.cjs')
exports.addCart = async(req,res , next) =>{

    try{
        const userId = req.user._id
        const productId = req.params.productId
        let cart =  await Cart.findOne({ user: userId });

        if(cart){
            const item = cart.items.find((el) => el.product.toString() === productId);
            if (item) {
                item.quantity += 1;
              } else {
                cart.items.push({ product: productId, quantity: 1 });
              }
              await cart.save();
        } else{
            cart = await Cart.create({
                user: userId,
                items: [{ product: productId, quantity: 1 }],
              });
        }

        res.status(201).json({
            status: "success",
            data: cart,
          });
       

    }catch(error){
       console.log(error);
    }

}

exports.removeFromCart = async(req, res, next) =>{
    try{
        const userId = req.user._id
        const productId = req.params.productId
        const cart = await Cart.findOne({ user: userId })
        const item = cart.items.find((el) => el.product.toString() === productId);
        if (item) {
            const index = cart.items.indexOf(item);
            cart.items.splice(index, 1);
            cart.save();
        }
        res.status(204).json({
            status: "success",
            data: cart,
        })

    }catch(error){
        console.log(error)
    }
}


exports.updateCart = async(req,res ,next) =>{
    try{
        const userId = req.user._id
        const productId = req.params.productId
        const count = req.body.count
        let cart =  await Cart.findOne({ user: userId });
        let updatedProduct;
        if(cart){
            const item = cart.items.find((el) => el.product.toString() === productId);
            if (item) {
                item.quantity = count;
                updatedProduct = item;
              } else {
                cart.items.push({ product: productId, quantity: count });
                updatedProduct = cart.items.find((el) => el.product.toString() === productId);
              }
              await cart.save();
        } else{
            cart = await Cart.create({
                user: userId,
                items: [{ product: productId, quantity: count }],
              });
              updatedProduct = cart.items[0];
        }



        res.status(201).json({
            status: "success",
            data: cart,
          });
       

    }catch(error){
       console.log(error);
    }

}
exports.getCart = async(req, res, next) =>{

    try{
        console.log(req.user)
        const userId = req.user._id;
        console.log(userId)
        const cart = await Cart.findOne({user:userId}).populate({
            path:"items.product",
            select:"name  "
        })

        res.status(200).json({
            status:'success',
                cart:cart
            
        })


    }catch(error){
        console.log(error)
    }
}

exports.getAllcart = async(req, res,next) =>{
    const carts = await Cart.find()
    res.status(200).json({
        status:"success"
        ,data:carts
    })
}