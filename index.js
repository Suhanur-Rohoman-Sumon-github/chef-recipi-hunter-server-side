const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
var cors = require('cors')

const chef = require('./data/chef.json')
const servises = require('./data/sarvises.json')

app.use(cors())

app.get('/',(req , res)=>{
    res.send('dragin is running')
})

app.get('/chef',(req,res)=>{
    res.send(chef)
})
app.get('/servises',(req,res)=>{
    res.send(servises)
})

app.listen(port, ()=>{
    console.log(`dragon is runing in prort ${port} `)
})