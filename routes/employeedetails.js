var express = require('express');
var router = express.Router();
var control = require('../model/control');

router.get('/:id', function(req, res){
    var id = req.params.id;
    control.getEmployeeById(id, function(err, employee){
        if(err){
            res.render('error', {title: "Error", message: err.message, statusCode: err.status, errorStack: err.stack });
        }
        else{
            res.render('employeedetails', {title: "Employee Details", employee : employee});
        }
    })
});

module.exports = router;
