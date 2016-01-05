var express = require('express');
var parsedJSON = require('../mocks/map');

//var grouter = express.Router();

exports.getSymbol = function (req,res){
    res.json(parsedJSON);
}

//grouter.get('/', function(req, res) {
//    res.json(parsedJSON);
//});
//
//
//
//
//
//module.exports = grouter;