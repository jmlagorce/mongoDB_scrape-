var db = require("../models/sportsArticle");


module.exports = function(app) {
    app.put("/api/saved/:id", function(req, res) {
        db.update(
          { _id: req.params.id },
          { 
            $set: {
                saved: true
          }
        }
        ).then(function(results) {
          res.json(results);
        });
      });


}