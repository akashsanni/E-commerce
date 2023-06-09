const app = require('./app.cjs')

const express = require('express')
const PORT_NO = process.env.port || 1200;




app.get("*" , (req, res)=>{
    res.sendFile(path.join(__dirname , "./Frontend/dist/index.html")),
    function(err){
        res.status(500).send(err)
    }
})
app.listen(PORT_NO , ()=>{
    console.log(`App is running on port no ${PORT_NO}`);
})