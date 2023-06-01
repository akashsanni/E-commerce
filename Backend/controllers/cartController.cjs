
const catchAsync = require('../utils/catchAsync.cjs')
const AppError = require('../utils/appError.cjs')
const Cart = require('./../modals/cartModel.cjs')
const User = require('./../modals/userModel.cjs')
exports.addCart = async(req,res , next) =>{

    try{
        const userId = req.user.id
        const productId = req.body.product
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
        const userId = req.body.user
        const productId = req.body.product
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
        const userId = req.user.id
        const productId = req.body.product
        const count = req.body.count
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
                items: [{ product: productId, quantity: count }],
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
exports.getCart = async(req, res, next) =>{
    try{
        const userId = req.params.id;
        console.log(userId)
        const cart = await Cart.findOne({user:userId});

        res.status(200).json({
            status:'success',
            data:{
                cart:cart
            }
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