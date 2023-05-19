const User = require('../modals/userModel.cjs')
const catchAsync = require('../utils/catchAsync.cjs')


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
