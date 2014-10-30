var express = require('express');
var router = express.Router();
var control = require('../model/control');

router.get('/', function(req, res) {
    control.getAllCustomers(function (err, customers) {
        if (err) {
            return err;
        }
        res.render('customers', {title: 'All Customers', customers: customers});
    })
})

router.get('/:id', function(req, res){
    var id = req.params.id;
    control.getCustomerById(id, function(err, customer){
        if(err){
            res.render('error', {title: "Error", message: err.message, statusCode: err.status, errorStack: err.stack });
        }
        else{
            res.render('customerdetails', {title: "Customer Details", customer : customer});
        }
    })
});

module.exports = router;

