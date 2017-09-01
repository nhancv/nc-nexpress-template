var express = require('express');
var router = express.Router();
var Logic = require('./logic');

/* GET home page. */
router.get('/', function (req, res, next) {
    var logic = new Logic(10);

    var bindData = {
        title: logic.hello(),
        hello: logic.hello()
    };


    res.render('index', bindData);
});

module.exports = router;
