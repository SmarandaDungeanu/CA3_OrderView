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
                orders.sort(function(a, b) {
                   a = new Date(a.orderDate);
                   b = new Date(b.orderDate);
                return b-a;
            });
                 res.render('orders', { title: 'Order Viewer', orders: orders, customers: customers });
             })
     })
});

module.exports = router;

