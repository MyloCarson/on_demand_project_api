const express = require('express')
const Customer  =  require('../../models/customer')
const customerRouter = express.Router()

customerRouter.get('/',(req,res) => {
    res.status(200).send('Hello World!')
})

module.exports = customerRouter