const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
   bookName:String,
   author_id:Number,
   price:Number,
   ratings:String,
}, { timestamps: true });


module.exports = mongoose.model('radon-books', bookSchema) //users
