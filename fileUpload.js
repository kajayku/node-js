var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {
    console.log(req.url);
    if (req.url === '/fileupload') {
        var form = new formidable.IncomingForm();
        form.uploadDir = './temp'; // Temporary folder for uploads
        form.keepExtensions = true; // Keep original file extension
        
        form.parse(req, function (err, fields, files) {
            if (err) {
                console.error(err);
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('An error occurred during file upload.');
                return;
            }

            var uploadedFile = files.filetoupload; // Access uploaded file
            console.log(uploadedFile); // Debugging
            var oldpath = uploadedFile.filepath || uploadedFile.filepath;
            var newpath = path.join('./images', uploadedFile.originalFilename);

            // Ensure the 'images' folder exists
            if (!fs.existsSync('./images')) {
                fs.mkdirSync('./images');
            }

            fs.rename(oldpath, newpath, function (err) {
                if (err) {
                    console.error(err);
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.end('Error moving the file.');
                    return;
                }
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('File uploaded and moved!');
            });
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        res.end();
    }
}).listen(8080);
