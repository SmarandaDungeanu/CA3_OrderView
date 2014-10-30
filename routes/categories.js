var express = require('express');
var router = express.Router();
var control = require('../model/control');

router.get('/', function(req, res) {
    control.getAllCategories(function (err, categories) {
        if (err) {
            return err;
        }
        res.render('categories', {title: 'Categories', categories: categories});
    })
})


module.exports = router;

