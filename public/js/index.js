$(".scrape").on("click", function(event) {
    axios.get("https://www.espn.com/").then(function(response) {

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(response.data);

  // An empty array to save the data that we'll scrape
  var results = [];

  // With cheerio, find each p-tag with the "title" class
  // (i: iterator. element: the current element)
  $("ul.headlineStack__list").each(function(i, element) {
    
    // Save the text of the element in a "title" variable
    var title = $(element).children('li').children('a').text();
    var link = $(element).children('li').children('a').attr("href");

    // Save these results in an object that we'll push into the results array we defined earlier
    db.SportsArticles.insert({
      title: title,
      link: link
    });
  });

});