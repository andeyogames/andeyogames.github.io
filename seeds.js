var mongoose    = require("mongoose"),
    Games  = require("./models/gamesObj");


var data = [

    {
           score: 1234,
           title_image: "holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail",
           description: "Game Description Language, or GDL, is a language designed by Michael Genesereth as part of the General Game Playing Project at Stanford University",
           price: 12.99,
           game_studio: "Riot Games"
    },
    
    {
           score: 999,
           title_image: "holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail",
           description: "Game Description Language, or GDL, is a language designed by Michael Genesereth as part of the General Game Playing Project at Stanford University",
           price: 12.99,
           game_studio: "Riot Games"
    },

    {
           score: 354115,
           title_image: "holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail",
           description: "Game Description Language, or GDL, is a language designed by Michael Genesereth as part of the General Game Playing Project at Stanford University",
           price: 12.99,
           game_studio: "Riot Games"
    }
];

function seed(){
    //remove all campgrounds
        Games.remove({}, function(err){
            if(err){
                console.log(err);
            }
            else{
                    console.log("games removed");
                    data.forEach(function(seed){
                    Games.create(seed, function(err, campgrounds){
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log("added a games");
                        //create a comment on each campground
                    }
                });
            });
        }
    });
//add a few campgrounds and a few comments
}

module.exports = seed;