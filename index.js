var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var recipeController = require('./controllers/recipesController');
mongoose.connect('mongodb://localhost/recipes');
var app = express();

app.set("view engine", "hbs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_mthod'));
app.use(express.static(__dirname + '/public'));

app.use("/recipes", recipeController);

app.listen(4000, function(){
  console.log("app listening on port 4000");
});
