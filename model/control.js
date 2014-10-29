var mongoose = require('mongoose');
//var db = require("./db");
var orders = mongoose.model('Order');
var categories = mongoose.model('Category');
var customers = mongoose.model('Customer');
var employees = mongoose.model('Employee');
<<<<<<< HEAD
<<<<<<< HEAD
=======
var details = mongoose.model('Detail');
var products = mongoose.model('Product');
>>>>>>> origin/Smaranda
=======
>>>>>>> origin/Smaranda

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

function getDetailsByOrderId(id, callback){
    var query = {orderId : id};
    details.find(query, function(err, details){
        if(err){
            return callback(err);
        }
        else{
            callback(null, details);
        }
    })
}

function getAllProducts(callback){
    products.find({}, function(err, products){
        if(err){
            return callback(err);
        }
        else{
            callback(null, products);
        }
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
<<<<<<< HEAD
<<<<<<< HEAD
    getEmployeeById: getEmployeeById
=======
    getEmployeeById: getEmployeeById,
    getDetailsByOrderId: getDetailsByOrderId,
    getAllProducts: getAllProducts
>>>>>>> origin/Smaranda
}
=======
    getEmployeeById: getEmployeeById
}
>>>>>>> origin/Smaranda
