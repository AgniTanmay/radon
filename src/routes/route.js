const express = require('express');
const module1 = require('../util/helper');
const underscore = require('underscore');

const router = express.Router();

router.get('/movies', function (req, res) {
   module1.movieList(req,res);
});

router.get('/movies/:indexNumber', function (req, res,indexNumber) {
  module1.moviesOfList(req,res);
});
router.get('/films', function (req, res) {
  module1.movieComp(req,res);
});




module.exports = router;
// adding this comment for no reason