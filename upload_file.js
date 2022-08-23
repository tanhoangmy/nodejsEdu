var formidable = require('formidable');

// Create upload form
var http = require('http');

var fs = require('fs');
http
  .createServer(function (req, res) {
    if (req.url == '/fileupload') {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        // Save file upload
        var oldpath = files.filetoupload.filepath;
        var newPath =
          __dirname + '/storge/' + files.filetoupload.originalFilename;
        console.log(oldpath);

        fs.rename(oldpath, newPath, function (err) {
          if (err) throw err;
          res.write('File uploaded and moved');
          res.end();
        });

        // res.write('File uploaded <br/>');
        // res.write('File uploaded on oldpath:' + oldpath);
        // res.write('It will be upload to:' + newPath);
        // res.end();
      });
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write('</form>');
      return res.end();
    }
  })
  .listen(8080);
