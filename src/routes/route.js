const express = require('express');
const router = express.Router();

const AuthMiddleWare = require("../")

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

const publisherController= require("../controllers/publisherController")

router.post("/createAuthor", authorController.createAuthor)

router.post("/newPublisher", publisherController.createPublisher);

router.post("/createNewBook", bookController.createNewBook)

router.get("/getBookDetails", bookController.getBookDetails)

//Assignment For Middleware
router.get("/middlewaregf", AuthMiddleWare.md1, bookController.sadYep)

module.exports = router;