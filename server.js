//dependencies
var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var cheerio = require("cheerio");
var path = require("path")

var app = express();
var PORT = process.env.PORT || 3000;

// Set up a static folder (public) for our web app
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
// app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, '/public')));
// app.use(express.static(__dirname + '/public'));

app.engine(
    "handlebars",
    exphbs({
      defaultLayout: "main"
    })
  );
  app.set("view engine", "handlebars");

  

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/newsScrape";
mongoose.Promise = Promise; 
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

require("./routes/htmlRoutes")(app);

  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });

