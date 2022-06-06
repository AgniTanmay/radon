const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    category:{
        type:String,
        required:[true,'Book category is required']
    },
    author:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    year:{
        type:String
    }
}, { timestamps: true });

module.exports = mongoose.model('Radon-book', bookSchema) //users
