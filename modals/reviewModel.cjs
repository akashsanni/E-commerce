const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    }
    ,
    review:{
        type:String,
        required:[true , "Review is required"]
    },

    rating:{
        type:Number, 
        min:[1,"Rating should be atleast 1"],
        max:[5 , "Rating should be atmax 5" ]
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }


})

reviewSchema.set('toObject',{virtuals:true})
reviewSchema.set('toJSON',{virtuals:true})
reviewSchema.pre('find', function() {
    this.populate({
        path:'product',
        select:'name description _id'
    }).populate({
        path:"user",
        select:"username"
    });
  });

const Review = mongoose.model('Review' , reviewSchema)

module.exports = Review