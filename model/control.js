var mongoose = require('mongoose');
//var db = require("./db");
var orders = mongoose.model('Order');
var categories = mongoose.model('Category');
var customers = mongoose.model('Customer');
var employees = mongoose.model('Employee');

function getAllOrders(callback){
    orders.find(function(err, orders) {
        if(err) {
            return callback(err);
        }
        else {
            callback(null, orders);
        }
    });
}

function getAllCategories(callback){
    categories.find({},function(err, categories){
        if(err){
            return callback(err);
        }
        else{
            callback(null, categories);
        }
    })
}

function getAllCustomers(callback){
    customers.find({}, function(err,customers){
        if(err){
            return callback(err);
        }
        else{
            callback(null, customers);
        }
    })
}

function getOrderForCustomer(id, callback){
    orders.find({customerId:id},function(err, order){
        if(err){
            return callback(err);
        }
        else{
            callback(null, order);
        }
    })
}

function getCustomerById(id, callback){
    customers.findById(id,function(err, customer){
        if(err){
            return callback(err);
        }
        else{
            callback(null, customer);
        }
    })
}

function getOrderById(id, callback){
    orders.findById(id,function(err, order){
        if(err){
            return callback(err);
        }
        callback(null, order);
    })
}

function getEmployeeById(id, callback){
    employees.findById(id,function(err, customer){
        if(err){
            return callback(err);
        }
        else{
            callback(null, customer);
        }
    })
}

module.exports = {
    getAllOrders: getAllOrders,
    getAllCategories: getAllCategories,
    getAllCustomers: getAllCustomers,
    getOrderForCustomer: getOrderForCustomer,
    getCustomerById : getCustomerById,
    getOrderById: getOrderById,
    getEmployeeById: getEmployeeById
}