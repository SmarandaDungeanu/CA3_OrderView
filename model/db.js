var mongoose = require('mongoose');

var dbURI = 'mongodb://smara:fotbal@ds033400.mongolab.com:33400/smadb';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through app termination');
        process.exit(0);
    });
});

var OrderSchema = mongoose.Schema({
    _id: Number,
    customerId: String,
    employeeId: Number,
    orderDate: String,
    requiredDate: String,
    shippedDate: String,
    shipVia: String,
    freight: Number,
    shipName: String,
    shipAddress: String,
    shipCity: String,
    shipRegion: String,
    shipPostalCode: String,
    shipCountry: String
});

var CategorySchema = mongoose.Schema({
    _id: Number,
    name: String,
    description: String
});

var ProductSchema = mongoose.Schema({
    _id: Number,
    name: String,
    categoryId: Number,
    quantityPerUnit: String,
    unitPrice: Number,
    unitsInStock: Number,
    unitsOnOrder: Number,
    reorderLevel: Number,
    discontinued: Number
});

var DetailsSchema = mongoose.Schema({
    orderId: Number,
    productId: Number,
    unitPrice: Number,
    quantity: Number,
    discount: Number
});

var CustomerSchema = mongoose.Schema({
    _id: String,
    companyName: String,
    contactName: String,
    contactTitle: String,
    address: String,
    city: String,
    region: String,
    postalCode: String,
    country: String,
    phone: String,
    fax: String
});

var EmployeeSchema = mongoose.Schema({
    _id: Number,
    lastName: String,
    firstName: String,
    title: String,
    titleOfCourtesy: String,
    birthDate: String,
    hireDate: String,
    address: String,
    city: String,
    region: String,
    postalCode: String,
    country: String,
    homePhone: String,
    extension: String,
    notes: String
});


mongoose.model( 'Order', OrderSchema);
mongoose.model( 'Category', CategorySchema);
mongoose.model( 'Customer', CustomerSchema);
mongoose.model( 'Product', ProductSchema);
<<<<<<< HEAD
<<<<<<< HEAD
mongoose.model( 'Detail', DetailsSchema);
=======
mongoose.model( 'Detail', DetailsSchema, 'orderdetails');
>>>>>>> origin/Smaranda
=======
mongoose.model( 'Detail', DetailsSchema);
>>>>>>> origin/Smaranda
mongoose.model( 'Employee', EmployeeSchema);