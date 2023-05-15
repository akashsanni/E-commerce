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
    rating:{
        type:Number,
    },
    reviews: {
        type: Number,
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
            categoryName:{type:String},
            categoryImage:{type:String}
        },
    

    });

const Product = mongoose.model('Product', productSchema);

module.exports = Product 