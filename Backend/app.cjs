const express = require('express')
const morgan = require('morgan')
const cors = require('cors');
const app = express();
app.use(cors());
const productRouter = require('./routes/productroutes.cjs')
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/products', productRouter);
module.exports = app;