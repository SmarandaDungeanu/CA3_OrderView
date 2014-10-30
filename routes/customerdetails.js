var express = require('express');
var router = express.Router();
var control = require('../model/control');

router.get('/:id', function(req, res){
    var id = req.params.id;
<<<<<<< HEAD
    control.getCustomerById(id, function(err, employee){
=======
    control.getCustomerById(id, function(err, customer){
>>>>>>> origin/Cristi
        if(err){
            res.render('error', {title: "Error", message: err.message, statusCode: err.status, errorStack: err.stack });
        }
        else{
<<<<<<< HEAD
            res.render('customerdetails', {title: "Employee Details", customer : employee});
=======
            res.render('customerdetails', {title: "Customer Details", customer : customer});
>>>>>>> origin/Cristi
        }
    })
});

module.exports = router;

