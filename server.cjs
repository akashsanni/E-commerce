const app = require('./app.cjs')

const express = require('express')
const PORT_NO = process.env.port || 1200;





app.listen(PORT_NO , ()=>{
    console.log(`App is running on port no ${PORT_NO}`);
})