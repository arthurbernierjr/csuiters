const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const leadSchema = new mongoose.Schema({
    name: String,
    email: String, 
    phone: String
})

const Lead = mongoose.model('Lead', leadSchema)

module.exports = Lead