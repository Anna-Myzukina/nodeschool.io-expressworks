/*Exercise 5 of 8
HTML without styles is boring so this exercise will teach you how to use Stylus with Express on the fly.
Style the HTML from the "STATIC" exercise using Stylus middleware.
Stylus <https://github.com/stylus/stylus> generates .css files on-the-fly from .styl files.
Your solution should listen on the port supplied by process.argv[2] for
GET requests, one of which will be for main.css, which should be
automatically generated by your Stylus middleware. index.html and main.styl can be found in process.argv[3] (they are in the same directory).
You could also create your own folder and use these, if you like:
The main.styl file:

    p
      color red

The index.html file:

    <html>
      <head>
        <title>expressworks</title>
        <link rel="stylesheet" type="text/css" href="/main.css"/>
      </head>
      <body>
        <p>I am red!</p>
      </body>
    </html>
 */
var path = require('path')
var express = require('express')
var app = express()

app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));

app.listen(process.argv[2])