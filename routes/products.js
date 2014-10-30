var express = require('express');
var router = express.Router();
var control = require('../model/control');

router.get('/', function(req, res) {
    control.getAllProducts(function (err, products) {
        if (err) {
            return err;
        }
        res.render('products', {title: 'All Products', products: products});
    })
})

router.get('/:id', function(req, res){
    var id = req.params.id;
    control.getProductsOfCategory(id, function(err, products){
        if(err){
            return err;
        }
        res.render('products', {title: 'Products', products: products});
    })
});

module.exports = router;

