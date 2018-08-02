var router = require('express').Router();
var files = require('../controller/controller');

var path = "";
var file_serv1 = "";
var file_serv2 = "";
var file_api1 = "";
var file_api2 = "";
var file_spn1 = "";
var file_spn2 = "";

router.get('/logs_err/:id', (req,res,next)=> {
    res.json();
    next();
});

router.get('/logs_out/:id', (req,res,next)=> {
    res.json();
    next();
});

module.exports = router;