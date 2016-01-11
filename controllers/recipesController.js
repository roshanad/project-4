var express = require("express");
var router = express.Router();
var RecipeModel = require("../models/recipe");

function error(response, message){
  response.status(500);
  response.json({error: message});
}

router.get("/", function(req, res){
  RecipeModel.find({}).then(function(recipes){
    res.json(recipes);
  });
});

module.exports = router;
