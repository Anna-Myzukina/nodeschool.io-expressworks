/*Exercise 8
Most of the times we're building RESTful API servers with JSON.
Write a server that, when it receives a GET, reads a file, parses it to JSON,
and responds with that content to the user.
The server should respond to any GET that matches the /books resource path.
As always, the port is passed in process.argv[2]. The file to read is passed
in process.argv[3].
Respond with:

    res.json(object)

Everything should match the /books resource path.
For reading the file, use the fs module, e.g.,

    fs.readFile(filename, callback)
 */
var path = require('path')
var express = require('express')
var app = express()
var fs = require('fs')

app.get('/books', function(req, res){
  var filename = process.argv[3]
  fs.readFile(filename, function(e, data) {
    if (e) return res.send(500)
    try {
      books = JSON.parse(data)
    } catch (e) {
      res.send(500)
    }
    res.json(books)
  })
})

app.listen(process.argv[2])


/**
 * books.json
 * 
 [{
  "title": "Express.js Guide",
  "tags": ["node.js", "express.js"],
  "url": "http://expressjsguide.com"},
  {"title": "Rapid Prototyping with JS",
  "tags": ["backbone.js", "node.js", "mongodb"],
  "url": "http://rpjs.co"},
  {"title": "JavaScript: The Good Parts",
  "tags": ["javascript"]}
]
 */