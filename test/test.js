var should = require("should");
var control = require("../model/control");


describe('Control - DB connector', function () {
    var should = require("should");
    var mongoose = require('mongoose');
    var db = require("../model/db");
    var orders = mongoose.model('Order');
    var categories = mongoose.model('Category');
    var customers = mongoose.model('Customer');
    var employees = mongoose.model('Employee');
    var details = mongoose.model('Detail');
    var products = mongoose.model('Product');

    before(function () {
        console.log('---------------Tests started--------------------');

        mongoose.connection.close();
        var dbURI = 'mongodb://smara:fotbal@ds033400.mongolab.com:33400/smadb';

        mongoose.connect(dbURI);

        mongoose.connection.on('connected', function () {
            console.log('Mongoose connected to ' + dbURI);
        });

        mongoose.connection.on('error', function (err) {
            console.log('Mongoose connection error: ' + err);
        });


    });


    after(function () {
        console.log('---------------Tests finished--------------------');
        mongoose.connection.close();
        process.on('SIGINT', function () {
            mongoose.connection.close(function () {
                console.log('Mongoose disconnected through app termination');
                process.exit(0);
            });
        });
        mongoose.connection.on('disconnected', function () {
            console.log('Mongoose disconnected');
        });
    });

    describe('getOrderByID', function () {
        it('should return a null order', function () {
            control.getOrderById(2, function (order) {
                order.should.equal(null);
            })
        });
        it('should return correct order', function () {
            control.getOrderById(11076, function (order) {
                order._id.should.equal(11076);
            })
        });
    });


    describe('getAllCategories', function () {
        it('should get the list of all categories', function () {
            control.getAllCategories(function (data) {
                data.should.not.equal(null);
            });
        });
    });

    describe('getAllCategories', function () {
        it('should get the list of all categories', function () {
            control.getAllCategories(function (data) {
                data.should.not.equal(null);
            });
        });
    });

    describe('getDetailsByOrderId', function () {
        it('should get the details with the same orderID', function () {
            control.getDetailsByOrderId(11076, function (data) {
                data.orderId.should.equal(11076);
            });
        });
    });

    describe('getProductsOfCategory', function () {
        it('should get the products with the same categoryID', function () {
            control.getProductsOfCategory(1, function (data) {
                data.forEach(function (data){
                    data.categoryId.should.equal(1);
                });
            });
        });
    });

    describe('getEmployeeById', function () {
        it('should return the employee with the ID', function () {
            control.getEmployeeById(5, function (data) {
                data._id.should.equal(5);
            });
        });
    });

});
