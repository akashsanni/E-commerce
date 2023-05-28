const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const User = require('./../modals/userModel.cjs')
const catchAsync = require('../utils/catchAsync.cjs')
const AppError = require('../utils/appError.cjs')
const signToken = id =>{
    return jwt.sign({
        id
    },'processenvjwtsecret',{
        expiresIn: '1d'
    })
}
 exports.signup = catchAsync(async(req,res,next) => {
    // problem is that everyone can use to login and signup using admin 
    // const newUser = await User.create(req.body);
    const newUser = await(User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
    }))

    // secret should be 32 characters  and dont wrte here wite env variable i will do it later 
    const token = signToken(newUser._id)
    res.status(201).json({
        status: 'success' , 
        token,
        data: { 
            tour: newUser
            }
        });
        
})

exports.login = catchAsync(async(req, res, next) => {
    const { email, password } = req.body;

    // check if email and password esidet 
    if (!email || !password) {
       return next(new AppError('Please provide email and password', 400));
    }; 
    
    //check if user exists && password is correct 

    const user = await User.findOne({email}).select('+password')
    const correct = await user?.correctPassword(password,user.password)
    if(!user || !correct){
        return next(new AppError('Invalid email or password', 401));
    }
    // if evereything is ok , send token to client 

    const token = signToken(user._id);
    res.status(200).json({
        status: 'success' ,
        token,

    })
})

exports.protect = catchAsync(async(req,res,next) => {
    // getting token an and check of its there 
     let token ; 
     if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1] ;
    }
    if(!token){
        return next(new AppError('Please log in to get access', 401));
    }

    // 2> Verification Token 
    const decoded = await promisify(jwt.verify)(token,'processenvjwtsecret')
    console.log(decoded);

    const freshUser = await User.findById(decoded.id); 
 

    if(!freshUser){
        next(new AppError('The user Token is not exist'  , 401))
    }
    if(freshUser.changesPasswordAfter(decoded.iat)) {
        return next(new AppError('user recently changed password ! please log in again '),401)

    }

    //go to the protected data
    req.user = freshUser
    next()

})
exports.restrictTo = (...args) => { 
    return(req,res,next)=>{
        if(!args.includes(req.user.role)){
            return next(new AppError('You are not authorized to perform this action ', 403))
        } 
        next();
    }
  
}
exports.forgotPassword = catchAsync( async (req , res , next ) => {
    // 1. Get user based on posted emnail 
    
    const user = await User.findOne({email : req.body.email})
    console.log(user);
    if(!user){
        return next(new AppError("There is no user with this email address ") , 404);
    }
    console.log(user);
    // generate the random reset Token 
    
    const resetToken = user.createPasswordResetToken();
    await user.save({validateBeforeSave: false})

    // send it to the user's email 


})
exports.resetPassword = (req , res , next ) => {
    
}
