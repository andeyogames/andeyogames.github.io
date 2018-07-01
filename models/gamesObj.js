var mongoose = require("mongoose");

var gamesSchema = new mongoose.Schema({
   title: String,
   score: Number,
   title_image: String,
   description:String,
   price: Number,
   game_studio: String,
   //media_content: 
});

module.exports = mongoose.model("Games", gamesSchema);