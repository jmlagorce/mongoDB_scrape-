var axios = require("axios");
var cheerio = require("cheerio");
var db = require("../server");

module.exports = function(app) {
    
    app.get("/", function(req, res) {
        res.render("index");

    });
      

      app.get("/saved", function(req, res) {
        res.render("saved");
      });

      app.get("*", function(req, res) {
        res.send("NOT A PAGE");
      });
    



}