const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const leadSchema = new mongoose.Schema({
    name: {type: String, required: true, default: 'not provided'},
    email: {type: String, required: true, default: 'not provided'}, 
    phone: {type: String, required: true, default: 'not provided'}
})

const Lead = mongoose.model('Lead', leadSchema)

module.exports = Lead