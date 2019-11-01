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
      app.put("/api/delete/:id", function(req, res) {
        db.update(
          { _id: req.params.id },
          { 
            $set: {
                saved: false
          }
        }
        ).then(function(results) {
          res.json(results);
        });
      });

      app.post("/submit", function(req, res) {
        // Create a new Note in the db
        db.Note.create(req.body)
          .then(function(dbNote) {
            // If a Note was created successfully, find one User (there's only one) and push the new Note's _id to the User's `notes` array
            // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
            // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
            return db.User.findOneAndUpdate({}, { $push: { notes: dbNote._id } }, { new: true });
          })
          .then(function(dbUser) {
            // If the User was updated successfully, send it back to the client
            res.json(dbUser);
          })
          .catch(function(err) {
            // If an error occurs, send it back to the client
            res.json(err);
          });
      });
      



}