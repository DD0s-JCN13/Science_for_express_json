var express = require('express');
var app = express();
var mysql = require('./conn/login.js');


app.get('/', function(req, res){
    res.send('Hello world!');
});

app.use(function(err, req, res, next){
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.render(err.status || 500);
    res.render('error');
})

app.listen(3000, function(){
    console.log('Science log for express logger');
    console.log('http://127.0.0.1:3000/');
});


module.exports = app;