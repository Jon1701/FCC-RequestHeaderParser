// Load ExpressJS.
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello world');
});

// Listen on Port 8080.
app.listen(8080, function() {
  console.log('Listening for incoming traffic on PORT 8080');
})
