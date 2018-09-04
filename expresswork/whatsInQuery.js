/*Exercise 7
Oftentimes, we need to process the data from the URL query string (urlencoded).
Write a route that extracts data from the query string in the GET /search URL
route, e.g. ?results=recent&include_tabs=true and then outputs it back to
the user in JSON format.
Use app.get('/search', function(){...}) for the route.
In Express.js, to extract query string parameters, we can use (inside the request handler):
    req.query.NAME
 */
var path = require('path')
var express = require('express')
var app = express()

app.get('/search', function(req, res){
  var query = req.query
  res.send(query)
})

app.listen(process.argv[2])