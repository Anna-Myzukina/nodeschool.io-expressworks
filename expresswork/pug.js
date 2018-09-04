/*Exercise 3
Create an Express.js app with a home page rendered by the Pug template engine.
The home page should respond to /home.
The view should show the current date using 'new Date().toDateString()'.
We use 'toDateString()' to simply return the date in a human-readable format
without the time
You can use our index.pug (recommended). The path to index.pug will be provided in process.argv[3].

var path = require('path')
var express = require('express')
var app = express()
app.set('view engine', 'jade')
app.set('views', process.argv[3])
app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2])
*/