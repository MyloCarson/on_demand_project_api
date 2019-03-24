const express = require ('express')
const bodyParser = require ('body-parser')
const db = require('./src/database').default
const userRouter = require ('./src/routes/usersRoutes')
const customerRouter = require('./src/routes/customersRoutes')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/v1/api/users', userRouter)
app.use('/v1/api/customers', customerRouter)

module.exports = app