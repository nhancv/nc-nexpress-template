var express = require('express');
var router = express.Router();
var Logic = require('./logic');

/* GET home page. */
router.get('/', function (req, res, next) {
    var logic = new Logic(10);
    res.render('index', {title: 'Express: ' + logic.hello()});
});

module.exports = router;
