const express = require('express')
const app = express()
const port = process.env.PORT || 5000;


app.get('/',(req , res)=>{
    res.send('dragin is running')
})

app.listen(port, ()=>{
    console.log(`dragon is runing in prort ${port} `)
})