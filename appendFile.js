var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
fs.unlink('appendFile.txt', function(err){
    if(err) throw err;
   console.log('Success');
});
}).listen(8080)