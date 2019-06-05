var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port =  process.env.PORT || 3001;

app.get('/', function(req, res){
    res.send('Express is working on IISNode');
});

app.listen( port, function(){
    console.log('Express listening on port', port);
});