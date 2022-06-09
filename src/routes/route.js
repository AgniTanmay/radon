const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")

router.post("/createAuthor",BookController.createAuthor)

router.post("/createBook", BookController.createBook  )

router.get("/getChetanBhagat", BookController.getChetanBhagat)

router.put("/getUpdate", BookController.authorBooks)

router.get("/bookPrice", BookController.bookNew)

module.exports=router;