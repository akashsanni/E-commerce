const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    user:{
            type:mongoose.Schema.ObjectId,
            ref:'User'
        },
        
   items:[
    {
      product:{
        type:mongoose.Schema.ObjectId,
        ref:'Product'
    },
    quantity:{
      type:Number,

    }
    }
    

    
   ],
      createdAt: {
        type: Date,
        default: Date.now
      }

   
})

const Cart =  mongoose.model('Cart' , cartSchema)

module.exports = Cart