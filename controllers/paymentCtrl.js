//var  fs = require ()


var express = require('express');
var parsedJSON = require('../mocks/transaction');



exports.getTransactionHistory = function (req,res){
    res.json(parsedJSON);
}

//paymentRouter.get('/', function(req, res) {
//
//});





