const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBookList= async function (req, res) {
    let allBooks= await BookModel.find().select({bookName:1,authorName:1,_id:0});
    res.send({msg: allBooks})
}

const getBooksInYear= async function (req, res) {
    let allBooks= await BookModel.find({year:this.year});
    res.send({msg: allBooks})
}

const getParticularBooks= async function (req, res) {
    let allBooks = await BookModel.find().select({BookModel});
    res.send({msg: allBooks})
}

const getXINRBooks= async function (req, res) {
    let allBooks = await BookModel.find({indianPrice:this.indianPrice});
    res.send({msg: allBooks})
}

const getRandomBooks= async function (req, res) {
    let allBooks = await BookModel.find({$or: [{stockAvailable: true},{totalPages:{$gt: 500}}]});
    res.send({msg: allBooks})
}

module.exports.createBook= createBook
module.exports.getBookList= getBookList 
module.exports.getParticularBooks= getParticularBooks
module.exports.getBooksInYear= getBooksInYear
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks