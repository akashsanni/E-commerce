const User = require('../modals/userModel.cjs')
const catchAsync = require('../utils/catchAsync.cjs')
const AppError = require('../utils/appError.cjs')

const filterObj = (obj , ...allowedFields) =>{
  const newObj = {};
  Object.keys(obj).forEach(el=> {
    if(allowedFields.includes(el)){
      newObj[el] = obj[el];
    }
    
  })
  return newObj;
}
exports.getAllusers = catchAsync(async (req, res,next) => {

  const users = await User.find();
  res.status(200).json({
    status: 'success',
    results:users.length ,
    data: {
      users
    }
  });
});

exports.updateMe = catchAsync(async(req,res,next) =>{
  // craete error if user posts paword data 
  if(req.body.password || req.body.passwordConfirm){
    return next (new AppError("This route is nor for changing The PassWord, please use Update Password",400))
  }

  // 2 .  UPADATE USER DOCUMENT 
  const filterdBody = filterObj( req.body ,'username' , 'email')
  console.log(filterdBody);
  const UpdateUser = await User.findByIdAndUpdate(req.user.id , filterdBody , {
    new:true,
    runValidators:true
  })
  res.status(200).json({
    status:200,
    user: UpdateUser

  })
})
// kind of url /products/productid/users/783872
// just for reference 
// 
// {
//   "username":"CHANDO",
//   "email":"CHANDO@GMAIL.COM",
//   "password":"12345678",
//   "passwordConfirm":"12345678"
// }
// "_id": "6471b1d84f0931cf1cc34a37",
//645f1cf940d3c69260815740    boat airpoad1
// exports.deleteFromCart = async(req, res , next) =>{

// }



exports.getUser= async(req, res , next) =>{
  console.log(req.user);
  const user = await req.user.populate({
    path:'carts.product',
    select:'name images price '
  });
  if(!user){
    return next(new AppError('user is not found',404))
  }
    res.status(200).json({
      status:"success",
      data:{
        user
      }
      })
}
