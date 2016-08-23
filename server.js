// Load ExpressJS.
var express = require('express');
var app = express();

// Serve files from the ./build folder.
app.use(express.static('build'));

// Get the hostname of the server.
app.get('/hostname', function(req, res) {
  return res.json({
    'hostname': req.hostname
  })
});

app.get('/identify', function(req, res) {

  // Extracts operating system information from the browser headers.
  var extractOperatingSystem = function(userAgent) {

    try {

      // Rule to find text between parentheses.
      var regex = /\(([^)]+)\)/;
      var match = regex.exec(userAgent);

      // Return the text in the first parenthesis.
      return match[1];

    } catch(e) {
      return null;
    }

  }

  // Extracts language from the browser headers.
  var extractLanguage = function(data) {

    try {

      // Split the given header by commas.
      var tokens = data.split(',');

      // First token is the language.
      return tokens[0];

    } catch(e) {
      return null;
    }

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

// Root folder. Serve index.html.
app.get('/', function(req, res) {
  res.render(__dirname + '/build/index.html');
});

// Listen on Port 8080.
app.listen(8080, '127.0.0.1', function() {
  console.log('Listening for incoming traffic on PORT 8080.');
});
