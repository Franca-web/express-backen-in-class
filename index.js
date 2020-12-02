//moldules
require('dotenv').config()
const express = require('express') 
const mongoose = require('mongoose')

const app = express()

//variables
const dbLink = process.env.DBLINK
const port = process.env.PORT
const userRoutes = require('./src/routes/userRoutes')


//DATABASE CONNECTION
mongoose.connect(dbLink, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, () => {
  app.listen(port, () => {
    console.info('DATABASE CONNECTED, SERVER IS APP')
  })
})

// midddlewares
app.use(express.json() )
// routes
app.use(userRoutes)
app.get('/', (req, res)=>{
  res.status(200).send('<h1>welcome</h1>')
})


  