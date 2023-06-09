const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const { type } = require('os')
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please tell us your name'],
    },
    email:{
        type: String,
        required: [true, 'please provide Your email'],
        unique:true,
        lowercase:true,
        validate: [validator.isEmail,'Plase us a provide a valid email']

    },
    photo: {
        type: String,

    },
    role:{
        type:String,
        enum:['user' , 'guide' , 'lead-guide' , 'admin'],
        default:'user'
        
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false
        },  
    passwordConfirm: {
        type: String,
        required: [true, 'please Confirm Your Password'],
        validate: {
            // Match password
            // this only works on save 
            validator: function (el) {
                return el === this.password;
            },
            message: "Passwords do not match"
        }
    },
    carts:[
       {
        type:mongoose.Schema.ObjectId,
        ref:"Cart"
       }
    ],
     
    paswordChanged : Date,
    passwordResetToken:String,
    passwordResetExpires: Date ,
})

userSchema.pre('save' , async function(next) {
    // encrypt password before saving
    if(!this.isModified('password')) return next();
    this.password = await bcryptjs.hash(this.password , 12);
    this.passwordConfirm = undefined; 
    next();
})

userSchema.methods.correctPassword = async function(candidatePassword ,userPassword ){
    
    // compare candidate password with user password
    const isMatch = await bcryptjs.compare(candidatePassword , userPassword);
    return isMatch;
}

userSchema.methods.changesPasswordAfter = function(JWTimesStamps){
    if(this.paswordChanged){
        const changedTimestamp = parseInt( this.paswordChanged.getTime() /1000 ,10) ; 

       return JWTimesStamps < changedTimestamp
    }
}

userSchema.methods.createPasswordResetToken = function(){
    const resetToken = crypto.randomBytes(32).toString('hex')
    this.passwordResetToken  = crypto.createHash('sha256').update(resetToken).digest('hex')
    this.passwordResetExpires = Date.now() + 360000 ; // 1 hour
    return resetToken;
  
}


const User = mongoose.model('User' , userSchema );

module.exports = User