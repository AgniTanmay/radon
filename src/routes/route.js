const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")

router.post("/createAuthor",BookController.createAuthor)

router.post("/createBook", BookController.createBook  )

router.get("/getChetanBhagat", BookController.getChetanBhagat)

router.get("/getUpdate", BookController.authorBooks)

module.exports=router;