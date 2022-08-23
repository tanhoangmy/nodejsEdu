var http = require('http');
var url = require('url');
var fs = require('fs');

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = '.' + q.pathname;
    fs.readFile(filename, 'utf8', function (err, data) {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        return res.end('404 Not Found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
      }
    });
  })
  .listen(8080);
