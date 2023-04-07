const { Schema,model } = require('mongoose')

// create Schema
const contactSchema = new Schema({
    name: {
        type: String,
        required:true,
        trim: true,
    },
    email: {
        type: String,
        required:true,
        trim: true,
    },
    phone: {
        type: String,
        required:true,
        trim: true,
        minlength:11
    }
})

// Create Model
const Contact = model('Contact', contactSchema)

module.exports = Contact