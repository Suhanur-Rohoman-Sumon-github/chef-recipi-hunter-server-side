const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
var cors = require('cors')

const chef = require('./data/chef.json')
const servises = require('./data/sarvises.json')
const singleChef = require('./data/singleChef.json')

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

app.get('/singleChef',(req,res)=>{
    res.send(singleChef)
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const selectedId = chef.find(n => n.id == id)
    res.send(selectedId)
})

app.listen(port, ()=>{
    console.log(`dragon is runing in prort ${port} `)
})