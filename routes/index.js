var express = require('express');
var router = express.Router();
var control = require('../model/control');

/* GET home page. */
router.get('/', function(req, res) {
    control.getAllOrders(function(err,orders){
        if(err){
            return err;
        }
        control.getAllCustomers(function(err,customers){
                 if(err){
                     return err;
                 }
                 res.render('orders', { title: 'Order Viewer', orders: orders, customers: customers });
                 // res.render('index', {title: 'Order Viewer', orders: orders});
             })
     })
});

module.exports = router;

