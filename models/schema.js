const mongoose = require('mongoose')

const userschema = new mongoose.Schema({

    name: {
        type: String,
        required : true
    },
    tech: {
        type: String,
        required : true
     },
     enrolled: {
         type: Boolean,
         required : true,
         default: false
     }
})
module.exports = mongoose.model('schema',userschema)