var mongoose = require('mongoose');
var connect = mongoose.connect('mongodb://localhost/recipes');
var RecipeModel = require("../models/recipe");

RecipeModel.remove({}, function(err){
  console.log(err);
});

var recipe1 = new RecipeModel({body: "This is my first recipe"}).save();
var recipe2 = new RecipeModel({body: "This is my second recipe"}).save();
var recipe3 = new RecipeModel({body: "This is my third recipe"}).save();
