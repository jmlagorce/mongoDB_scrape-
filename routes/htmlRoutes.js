var axios = require("axios");
var cheerio = require("cheerio");
var db = require("../models/sportsArticle");
var mongojs = require("mongojs")

module.exports = function(app) {
    
    app.get("/", function(req, res) {
      db.find({}).then(data => {

        res.render("index", {articles: data});
      })
      

    });
      
    app.get("/clear", function(req, res) {
      db.remove({}).then(function () {

        res.redirect("/")
      })
        // Log any errors to the console
        
      
    });

    app.get("/comment", function(req, res) {
   
      res.render("comment")
    });
      app.get("/saved", function(req, res) {
        db.find({}).then(data => {

          res.render("saved", {articles: data});
        })
        
      });
      

      app.get("/scrape", function(req, res) {
        axios.get("https://www.espn.com/").then(function(response) {
          var $ = cheerio.load(response.data);
        
        
      
          $("ul.headlineStack__list").each(function(i, element) {
            
          
            var title = $(element).children('li').children('a').text();
            var link = $(element).children('li').children('a').attr("href");
        
            // Save these results in an object that we'll push into the results array we defined earlier
            db.create({
              title: title,
              link: "https://www.espn.com" + link
            });
          });
          res.redirect("/")
      });
    });

   
    
    
  
  


      app.get("*", function(req, res) {
        res.send("Not a page");
      });
    

    


    };

    