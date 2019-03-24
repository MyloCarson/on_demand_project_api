const moongose = require('mongoose');
const Schema = moongose.Schema;
const userModel = new Schema({
    username: {type: String},
    email : {type: String},
    password: {type: String},
    date_created: {type: Date, default: Date.now},
    date_updated: {type: Date, default: Date.now}
})
module.exports = moongose.model('users',userModel);