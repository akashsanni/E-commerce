const app = require('./app.cjs')

const PORT_NO = 1200;
app.listen(PORT_NO , ()=>{
    console.log(`App is running on port no ${PORT_NO}`);
})
