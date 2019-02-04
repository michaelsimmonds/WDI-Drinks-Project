require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./config/routes')

const app = express()

app.use(express.static(`${__dirname}/dist`))

mongoose.connect('mongodb://localhost/drinks')

app.use(bodyParser.json())

app.use('/api', routes)

app.listen(process.env.PORT, () => console.log(`Express is up and running on port ${process.env.PORT}`))
