const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const userRoutes = require('../routes/user')

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/users', userRoutes)

module.exports = app
