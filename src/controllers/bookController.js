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
    let data= await BookModel.findOneAndUpdate({bookName:"Two states"},{$set:{price:100}},{new:true})

    let authorData= await AuthorModel.find({author_id:data.author_id}).select({author_name:1,_id:0})
    res.send({msg: authorData })
}
//Assignment-4
const bookNew= async function (req, res) {
    let bookData= await BookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1})
     let combData = await AuthorModel.find({map:(x=>x.author_name)})
     let gt = bookData.author_name
     res.send({msg:combData, gt});
}

//Assignment-5(Optional)
const findBook= async function (req, res) {
    let authorData= req.params.author_id;
    let bookData = await BookModel.find({author_id:authorData}).select({bookName:1,_id:0})
    res.send(bookData)
}

//Assignment-6(Optional)
const findAge= async function (req, res) {
    let findAuthorId=  await AuthorModel.find({age:{$gt:50}}).select({author_id:1,_id:0});
    let authorRating = await BookModel.find({$and:[{author_id:findAuthorId},{ratings:{$gt:4}}]}).select({author_id:1,_id:0})
    let prAuthor = await AuthorModel.find({author_id:authorRating}).select({author_id:1,age:1,_id:0})
    res.send({msg:prAuthor})
}

module.exports.createAuthor=createAuthor
module.exports.createBook= createBook
module.exports.getChetanBhagat= getChetanBhagat
module.exports.authorBooks= authorBooks
module.exports.bookNew= bookNew
module.exports.findBook= findBook
module.exports.findAge= findAge
