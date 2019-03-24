require('dotenv').config()
const mongoose = require ('mongoose');
const dbURL = process.env.NODE_ENV === 'test' ? process.env.MONGODB_URI_TEST : process.env.MONGODB_URI
const db = mongoose.connect(dbURL,{ useNewUrlParser: true })


module.exports = db