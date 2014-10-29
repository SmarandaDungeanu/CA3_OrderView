var express = require('express');
var router = express.Router();
var control = require('../model/control');

router.get('/:id', function(req, res){
    var id = req.params.id;
    control.getCustomerById(id, function(err, employee){
        if(err){
            res.render('error', {title: "Error", message: err.message, statusCode: err.status, errorStack: err.stack });
        }
        else{
            res.render('customerdetails', {title: "Employee Details", customer : employee});
        }
    })
});

module.exports = router;

