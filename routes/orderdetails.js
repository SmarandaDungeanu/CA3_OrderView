var express = require('express');
var router = express.Router();
var control = require('../model/control');

<<<<<<< HEAD
router.get('/:id', function(req, res){
    var id = req.params.id;
    control.getOrderById(id, function(err, order){
        if(err){
            res.send({error: err});
        }
        control.getDetailsByOrderId(order._id, function(err, details){
            if(err){
                res.send({error: err});
            }
            control.getAllProducts(function(err, products){
                if(err){
                    res.send({error: err});
                }
                res.render('orderdetails', {title: "Order Details", order : order, details : details, products: products});
            })
        })
    })
});
=======
//router.get('/:id', function(req, res){
//    var id = req.params.id;
//    control.getOrderById(id, function(err, order){
//        if(err){
//            res.send({error: err});
//        }
//        control.getDetailsByOrderId(order._id, function(err, details){
//            if(err){
//                res.send({error: err});
//            }
//            control.getAllProducts(function(err, products){
//                if(err){
//                    res.send({error: err});
//                }
//                res.render('orderdetails', {title: "Order Details", order : order, details : details, products: products});
//            })
//        })
//    })
//});
>>>>>>> origin/Smaranda

module.exports = router;