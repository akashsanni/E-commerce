const express = require('express')
const morgan = require('morgan')
const cors = require('cors');
const userRouter = require('./routes/userRoutes.cjs');
const AppError = require('./utils/appError.cjs')
const globalErrorHandler = require('./controllers/errorController.cjs')
const app = express();
app.use(cors());
const productRouter = require('./routes/productroutes.cjs')
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);
app.all('*',( req, res, next) => {
 
    next(new AppError(`cant find the ${req.originalUrl} on this server`,404));
   })
   
   
   // global error handling  mechanism 
   app.use(globalErrorHandler)
module.exports = app;