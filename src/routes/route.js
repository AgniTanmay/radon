const express = require('express');
const externalModule = require('../logger/logger');
const externalModule2 = require('../util/helper');
const externalModule3 = require('../validator/formatter');


const router = express.Router();

router.get('/test-me', function (req, res) {
   externalModule.welcome();
   externalModule2.printDate();
   externalModule2.printMonth();
   externalModule2.getBatchInfo();
   externalModule3.spaceTrim();
   externalModule3.toLowerCase();
   externalModule3.toUpperCase();


    res.send('Welcome to my application. I am Agni Tanmaya Behera and a part of FunctionUp Radon cohort');
});


module.exports = router;
// adding this comment for no reason