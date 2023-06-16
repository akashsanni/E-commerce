const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors');
const userRouter = require('./routes/userRoutes.cjs');
const productRouter = require('./routes/productroutes.cjs')
const cartRouter = require('./routes/cartRoutes.cjs')
const AppError = require('./utils/appError.cjs')
const bookingRoutes = require("./routes/bookingRoutes.cjs")
const globalErrorHandler = require('./controllers/errorController.cjs')
const app = express();
app.use(cors());

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/carts', cartRouter);

app.use(express.static(path.join(__dirname , "./Frontend/dist")))
// app.use('./api/v1/bookings' , bookingRoutes )

app.get("*" , (req, res)=>{
    res.sendFile(path.join(__dirname , "./Frontend/dist/index.html")),
    function(err){
        res.status(500).send(err)
    }
})
app.all('*',( req, res, next) => {
 
    next(new AppError(`cant find the ${req.originalUrl} on this server`,404));
   })
   
   
   // global error handling  mechanism 
   app.use(globalErrorHandler)
module.exports = app;