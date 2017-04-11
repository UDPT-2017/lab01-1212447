var express = require('express');
var app = express();

app.use(express.static('public')); 
app.use("/components",express.static('bower_components')); 

//routes
app.get('/', function(req, res){
  res.send("Hello");
});

//start server
app.listen(3000);