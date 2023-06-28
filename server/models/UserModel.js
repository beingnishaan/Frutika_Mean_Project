const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userschema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    }
})

const UserModel = new mongoose.model('user', userschema)
module.exports = UserModel