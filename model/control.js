var mongoose = require('mongoose');
var db = require("./db");
var orders = mongoose.model('Order');
var categories = mongoose.model('Category');
var customers = mongoose.model('Customer');
var employees = mongoose.model('Employee');
var details = mongoose.model('Detail');
var products = mongoose.model('Product');

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

function getOrdersForCustomer(id, callback){
    var query = {customerId : id};
    orders.find(query, function(err, orders){
        if(err){
            return callback(err);
        }
        else{
            callback(null, orders);
        }
    })
}

function getOrdersForEmployee(id, callback){
    var query = {employeeId : id};
    orders.find(query,function(err, orders){
        if(err){
            return callback(err);
        }
        else{
            callback(null, orders);
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

function getProductsOfCategory(catId, callback){
    var query = {categoryId : catId};
    products.find(query, function(err, products){
        if(err){
            return callback(err);
        }
        else{
            callback(null, products);
        }
    })
}


function getEmployeeById(id, callback){
    employees.findById(id,function(err, employee){
        if(err){
            return callback(err);
        }
        else{
            callback(null, employee);
        }
    })
}

function getAllEmployees(callback){
    employees.find({},function(err,employees){
        if(err){
            return callback(err);
        }
        else{
            callback(null, employees);
        }
    })
}

module.exports = {
    getAllOrders: getAllOrders,
    getAllCategories: getAllCategories,
    getAllCustomers: getAllCustomers,
    getOrdersForCustomer: getOrdersForCustomer,
    getCustomerById : getCustomerById,
    getOrderById: getOrderById,
    getEmployeeById: getEmployeeById,
    getDetailsByOrderId: getDetailsByOrderId,
    getAllProducts: getAllProducts,
    getProductsOfCategory: getProductsOfCategory,
    getAllEmployees: getAllEmployees,
    getOrdersForEmployee: getOrdersForEmployee
}
