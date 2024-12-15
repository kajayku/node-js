var http = require('http');
// var uc = require('upper-case');
var dm = require('./dateModule');


http.createServer(function(req , res){
res.writeHead(200,{'Content-Type' : "text/html"});
res.write("The current time is ::" + dm.myDateTime());
// res.write(uc.upperCase(Hello));
res.end();
}).listen(8080);