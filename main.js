var      express        = require("express"),
         main           = express(),
         mongoose        = require("mongoose"),
         bodyParser      = require("body-parser"),
         seed          = require("./seeds"),
         Games          = require("./models/gamesObj");

//Preliminary Connection and Importing of Related Backend and Organizational Files
//
//seed();
mongoose.connect("mongodb://localhost/games_collection");
main.use(bodyParser.urlencoded({extended: true}));
//allows the javascript to know that rendering is done through ejs fieles
main.set("view engine", "ejs");


//Landing Page Get Route
main.get("/", function(req, res){
   Games.findById(req.params.id, function(err, allGames){
      if(err){
         console.log(err);
      }
      else{
         res.render("homePage",{games: allGames});
         //        ejs file   collection name  function arguement
      }
   });
});

//Games Page Get Route
// main.get("/games/:id", function(req,res){
//     //find the campground with id
//     //then render the show template with that id
//     Games.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
//        if(err){
//             console.log(err);
//        }
//        else{
//             console.log(foundCampground);
//             res.render("show", {campground: foundCampground});
//        }
//     });
// });

main.get("/gamePage", function(req, res){
   res.render("gamePage.ejs");
});

//About Page Get Route
main.get("/about",function(req, res){
   res.render("aboutPage.ejs"); 
});

//Support Page Get Route
main.get("/support", function(req, res){
   res.render("supportPage.ejs"); 
});

main.get("/login", function(req, res){
   res.render("loginPage.ejs");
});

main.listen(process.env.PORT, process.env.IP,function(){
    console.log("Server Active!");
});