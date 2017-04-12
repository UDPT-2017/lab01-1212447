var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.use(express.static('public')); 
app.use("/components",express.static('bower_components')); 

app.engine('hbs', exphbs({
	extname: ".hbs",
	defaultLayout: 'main'
}));

app.set('view engine', 'hbs');

//routes
app.get('/', function(req, res){
  	res.render("index", {title: "Lab01 - Home"});
});
app.get('/home', function(req, res){
  	res.render("index", {title: "Lab01 - Home"});
});
app.get('/abouts', function(req, res){
  	res.render("abouts", {title: "Lab01 - Abouts"});
});
app.get('/albums', function(req, res){
  	res.render("albums", {title: "Lab01 - Albums"});
});app.get('/blog', function(req, res){
  	res.render("blog", {title: "Lab01 - Blog"});
});
//start server
app.listen(5000, function(){
	console.log("Listen in port 5000")}
);
