// set up ========================
var express  = require('express');
var app      = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');              // log requests to the console (express4)
var bodyParser = require('body-parser');     // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var path    = require('path');

//Loading Controllers

var currencySymbol = require('./controllers/currSymbolCtrl');
var paymentRouter = require('./controllers/paymentCtrl');
//var home = require('./controllers/homeCtrl');
//var sendMoney = require('./controllers/sendmoneyCtrl');
// configuration =================

//mongoose.connect('mongodb://karthickgreets99@gmail.com:karthi123@ds037195.mongolab.com:37195/payment_history');     // connect to mongoDB database on modulus.io

app.use('/public',express.static(__dirname + '/public'));
app.use('/views' ,express.static(__dirname + '/views'));   // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
//app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// listen (start app with node server.js) ======================================
//app.listen(8080);
//console.log("App listening on port 8080");


var port = process.env.PORT || 8080;


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
//app.use('/api', currencySymbol);
app.use('/transactionHistory' , paymentRouter.getTransactionHistory);
app.use('/getCurrencySymbol' , currencySymbol.getSymbol);
app.use('/sendmoney' ,function(req,res){
    res.redirect('/views/sendmoney.html');
});
app.use('/',function(req,res){
    //console.log(path.join(__dirname+'/views/index.html'))
    res.sendFile(path.join(__dirname+'/views/index.html'));
    //It will find and locate index.html from View or Scripts
});


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Node Server started, redirecting to landing page ' + port);


module.exports = app;