const Product = require("../modals/product.cjs");

exports.postproduct = async (req, res) => {
    try {
      console.log(req.body);
      // const newProduct = new Product(req.body);
      // console.log(newProduct);
      const newProduct = await  Product.create(req.body);
      // await Product.save
      // console.log(newProduct);
      res.status(201).json({
        status: 'success',
        data: {
          product: newProduct,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      });
      
      
    }
  };

  exports.getAllproducts = async( req, res ) => {
    try{
      const product = await Product.find();
      res.status(200).json({
        status: 'success',
        data: {
          product,
        }
      })
    }
    catch(err){
      res.status(400).json({
        status: 'fail',
        message: err
        })
      }
  }


  exports.getproduct = async( req, res ) => {
    try{
      const product = await Product.find({_id:req.params.id}).populate('reviews')
      res.status(200).json({
        status: 'success',
        data: {
          product,
        }
      })
    }
    catch(err){
      res.status(400).json({
        status: 'fail',
        message: err
        })
      }
  }

  exports.updateproduct = async( req, res ) => {
    console.log(req.params.id);
    try{
      
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      })
      // const product = await Product.find({_id:req.params.id}).populate('reviews')
  
      res.status(200).json({
        status: 'success',
        data: {
          product
        }
      });
    }
    catch(err){
      res.status(400).json({
        status: 'fail',
        message: err
        })
      }
  }

  exports.deleteTour = async(req,res)=>{
    try{
      const product = await Product.findByIdAndDelete(req.params.id);
      res.status(200).json({
        status: 'success',
        data: {
          product
          }
          })
    }
    catch(err){
      res.status(400).json({
        status: 'fail',
        message: err
        })
    }
  }


  // some agregation function 

  exports.getAllCategories = async( req, res ) => {
    try{
      const categories = await Product.distinct('category')

      res.status(200).json({
        status: 'success',
        data: {
          categories,
        }
      })
    }
    catch(err){
      res.status(400).json({
        status: 'fail',
        message: err
        })
      }
  }

  exports.getByCategories = async( req, res ) => {
    console.log(req.params.id);
    try{
      const categories = await Product.find(
        {
          'category.name':`${req.params.id}`
        }
        )
      console.log(categories);
      res.status(200).json({
        status: 'success',
        data: {
          length:categories.length,
          categories,
        }
      })
    }
    catch(err){
      res.status(400).json({
        status: 'fail',
        message: err
        })
      }
  }

  exports.getByTags = async(req, res , next) =>{

    try{
      const tag = req.params.tagId ;
      const product = await Product.find({tag:tag})
      res.status(200).json({
        status:"success",

        data:{
          product
        }
      })
    }
    catch(error){
      console.log(error)
    }
  }
  


 