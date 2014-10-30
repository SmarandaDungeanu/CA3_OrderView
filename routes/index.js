var express = require('express');
var router = express.Router();
var control = require('../model/control');

/* GET home page. */
router.get('/', function(req, res) {
      res.render('index', { title: 'Main Page'});
});


module.exports = router;