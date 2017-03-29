console.log("'ello there mate!");
var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end("'ello there mate!");
});
server.listen(8080);