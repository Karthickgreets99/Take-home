
var express = require('express');
var parsedJSON = require('../mocks/transaction');

exports.getTransactionHistory = function (req,res){
    res.json(parsedJSON);
}






