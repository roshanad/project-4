var mongoose = require('mongoose');

var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var RecipeSchema = new Schema({
  body: String
	// description: String,
	// main_image_url: String,
	// video_url: String,
	// ingredients: [{
	// 	name: String,
	// 	quantity: String
	// }],
	// prep_time: String,
	// cook_time: String,
	// serving_size: String,
	// steps: [{type: String}],
	// tags: [{type: String}]
});

var RecipeModel = mongoose.model("Recipe", RecipeSchema);
