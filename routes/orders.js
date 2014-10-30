var express = require('express');
var router = express.Router();
var control = require('../model/control');

router.get('/', function(req, res) {
    control.getAllOrders(function(err,orders){
        if(err){
            return err;
        }
            orders.sort(function(a, b) {
                a = new Date(a.orderDate);
                b = new Date(b.orderDate);
                return b-a;
            });
            res.render('orders', { title: 'Order Viewer', orders: orders});
    })
});

router.get('/employee/:id', function(req, res) {
    var id = req.params.id;
    control.getOrdersForEmployee(id, function(err,orders){
        if(err){
            return err;
        }
            res.render('orders', { title: 'Order Viewer', orders: orders});
    })
});

router.get('/customer/:id', function(req, res) {
    var id = req.params.id;
    control.getOrdersForCustomer(id, function(err,orders){
        if(err){
            return err;
        }
            res.render('orders', { title: 'Order Viewer', orders: orders});
    })
});


module.exports = router;