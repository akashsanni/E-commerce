const mongoose = require('mongoose');
const DB = 'mongodb+srv://ecommerce:ecommerce@cluster0.p0ddwlo.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(DB).then(() => console.log('Connection established'));
const productSchema = new mongoose.Schema({
    name: {
        type : String,
        required: [true, 'product Must Have A name'],
        unique:true,
    },
    description: {
        type : String,
        required: [true, 'product Must Have A Descriprtion'],
        unique:true,
    },
    price:{
        type:Number,
        required: [true, 'A product Must Have A price']
    },
    discountPercent:{
        type:Number, 
    },
    images:[
    {
        type: String ,
    },
   ],
    category: 
        {
            name:{type:String},
            url:{type:String}
        },
    

    });

    productSchema.set('toObject',{virtuals:true})
    productSchema.set('toJSON',{virtuals:true})

    productSchema.virtual('reviews', {
        ref: 'Review', // This should be the name of the related schema for reviews
        localField: '_id', // The field in the current schema that is used as a reference
        foreignField: 'product' // The field in the related schema that references the current schema
      });


const Product = mongoose.model('Product', productSchema);

module.exports = Product 