/*Exercise 4
This exercise will teach you how to process the traditional (non-AJAX) web form.
Write a route ('/form') that processes HTML form input
(<form><input name="str"/></form>) and responds with the value of str backwards.
To handle a POST request, use the post() method which is used the same way as get():

    app.post('/path', function(req, res){...})

Express.js uses middleware to provide extra functionality to your web server.
Simply put, a middleware is a function invoked by Express.js before your own
request handler.
Middleware provide a large variety of functionality such as logging, serving
static files, and error handling.
A middleware is added by calling use() on the application and passing the
middleware as a parameter.
To parse x-www-form-urlencoded request bodies, Express.js can use urlencoded()
middleware from the body-parser module.

    var bodyparser = require('body-parser')
    app.use(bodyparser.urlencoded({extended: false}))
    */
   var path = require('path')
var express = require('express')
var app = express()

app.use(express.urlencoded())

app.post('/form', function(req, res) {
  res.send(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2])