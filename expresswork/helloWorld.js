/*Exercise 1
Create an Express.js app that outputs "Hello World!" when somebody goes to /home.The port number will be provided to you by expressworks as the first argument ofthe application, i.e., process.argv[2]
 */

var express = require('express')
var app = express()
app.get('/home', function(req, res) {
  res.end('Hello World!')
})
app.listen(process.argv[2])