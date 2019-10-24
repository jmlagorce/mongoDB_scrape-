//dependencies
var express = require("express");
var mongojs = require("mongojs");
var exphbs = require("express-handlebars");


var app = express();
var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
// Set up a static folder (public) for our web app
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.engine(
    "handlebars",
    exphbs({
      defaultLayout: "main"
    })
  );
  app.set("view engine", "handlebars");

  require("./routes/htmlRoutes")(app);

var databaseUrl = "newsScrape";
var collections = ["SportsArticles"];




var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

db.on("error", function(error) {
    console.log("Database Error:", error);
  });



  module.exports = app, db;