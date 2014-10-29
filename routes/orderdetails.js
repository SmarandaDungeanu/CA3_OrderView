/**
 * Created by smarandadungeanu on 29/10/14.
 */

var express = require('express');
var router = express.Router();
var control = require('../model/control');

router.get('/:id', function(req, res){
    var id = req.params.id;
    control.getOrderById(id, function(err, order){
        if(err){
            res.render('error', {title: "Error", message: err.message, statusCode: err.status, errorStack: err.stack });
        }
        else{
            res.render('orderdetails', {title: "Order Details", order : order});
        }
    })
});

module.exports = router;