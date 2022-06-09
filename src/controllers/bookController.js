const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel=require("../models/authorModel");
const { find } = require("../models/bookModel");

//Assignment-1
const createAuthor= async function (req, res) {
    let authorData= req.body

    let allAuthors= await AuthorModel.create(authorData)
    res.send({msg: allAuthors})
}
const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
//Assignment-2
const getChetanBhagat= async function (req, res) {
    let chetanData= await AuthorModel.find({authorName:"Chetan Bhagat"})

    let chetanBooks= await BookModel.find({author_id:chetanData[0].author_id})
    res.send({msg: chetanBooks })
}
//Assignment-3
const authorBooks= async function (req, res) {
    let data= await BookModel.find({name:"Two states"},{$set:{prices:100}},{new:true})

    let authorData= await AuthorModel.find({author_id:data[0].author_id}).select({author_name:1,_id:0})
    res.send({msg: authorData })
}
module.exports.createAuthor=createAuthor
module.exports.createBook= createBook
module.exports.getChetanBhagat= getChetanBhagat
module.exports.authorBooks= authorBooks
