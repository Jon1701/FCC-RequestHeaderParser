// Load ExpressJS.
var express = require('express');
var app = express();

app.get('/identify', function(req, res) {

  // Extracts operating system information from the browser headers.
  var extractOperatingSystem = function(userAgent) {

    // Rule to find text between parentheses.
    var regex = /\(([^)]+)\)/;
    var match = regex.exec(userAgent);

    // Return the text in the first parenthesis.
    return match[1];

  }

  // Extracts language from the browser headers.
  var extractLanguage = function(data) {

    // Split the given header by commas.
    var tokens = data.split(',');

    // First token is the language.
    return tokens[0];

  }

  // Store results in an object.
  var results = {
    'ipaddress': '',
    'language': '',
    'software': ''
  };

  // Get browser headers.
  var headers = req.headers;

  // Store ip address.
  results['ipaddress'] = req.ip;

  // Store language.
  results['language'] = extractLanguage(headers['accept-language']);

  // Store operating system.
  results['software'] = extractOperatingSystem(headers['user-agent']);

  res.json(results);
});

// Listen on Port 8080.
app.listen(8080, function() {
  console.log('Listening for incoming traffic on PORT 8080.');
});
