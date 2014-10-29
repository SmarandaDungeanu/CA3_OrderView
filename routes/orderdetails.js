var express = require('express');
var router = express.Router();
//var model = require('../database/model');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'MongoDB Viewer' });
});


router.get('/:id',function(req, res) {
    res.render('index', { title: 'The id was: '+req.params.id });
});


router.get('/:id/:data',function(req, res) {
    res.render('index', { title: 'The id was: '+req.params.id + req.params.data});
});
module.exports = router;
