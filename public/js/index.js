// var db = require("../../models/sportsArticle.js");

$(".save-btn").on("click", function () {
    event.preventDefault();

    const savedId = this.value;
    console.log(savedId)
    $.ajax("/api/saved/" + savedId, {
        type: "PUT",
       
      }).then(function() {
        console.log("Updated to saved");
        location.reload();
      });
  })




// $(".delete-btn").on("click", function () {

// })

// $(".clear-btn").on("click", function() {
//   // Make an AJAX GET request to delete the notes from the db
//   $.ajax({
//     type: "GET",
//     dataType: "json",
//     url: "/clearall",
//     // On a successful call, clear the #results section
//     success: function(response) {
//       $(".new-content").empty();
//     }
//   });
// });
