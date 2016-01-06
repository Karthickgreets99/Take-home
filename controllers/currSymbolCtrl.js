var express = require('express');
var parsedJSON = require('../mocks/map');


exports.getSymbol = function (req,res){
    var currency = (req.query.currencySyml) ? req.query.currencySyml : '$' ;
    //console.log(currency,parsedJSON);
        if(parsedJSON.hasOwnProperty(currency)){
            var symbol = parsedJSON[currency]
            //console.log(symbol);
        }
    res.send(symbol);
}

