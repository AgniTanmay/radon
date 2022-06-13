const express = require('express');
const router = express.Router();

const authMiddleWare= require("../../middleware/authMiddleware")

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

const publisherController= require("../controllers/publisherController")

router.post("/createAuthor", authorController.createAuthor)

router.post("/newPublisher", publisherController.createPublisher);

router.post("/createNewBook", bookController.createNewBook)

router.get("/getBookDetails", bookController.getBookDetails)

router.get("/mixedUp", bookController.mixedUp)

//Assignment For Middleware
router.get("/middlewaregf", authMiddleWare.md1, bookController.sadYep)

module.exports = router;