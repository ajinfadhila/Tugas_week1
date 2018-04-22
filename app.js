var http = require("http");
var url = require("url");
var routes = require("routes")();
var swig = require('swig');


routes.addRoute('/',function(req,res){
	var html = swig.compileFile('./Latihan_1/index.html')({
		
	});
	res.writeHead(200,{"Content-Type" : "text/html"});
		res.end(html);
});
routes.addRoute('/form',function(req,res){
	var html = swig.compileFile('./Latihan_1/form.html')();
	res.writeHead(200,{"Content-Type" : "text/html"});
		res.end(html);
});
routes.addRoute('/confrim',function(req,res){
	var html = swig.compileFile('./Latihan_1/welcome.html')();
	res.writeHead(200,{"Content-Type" : "text/html"});
		res.end(html);
});
http.createServer(function(req,res){
	var path = url.parse(req.url).pathname;
	var match = routes.match(path);

	if (match) {
		match.fn(req,res);
		
	}else{
		
		res.writeHead(404,{"Content-Type" : "text/plain"});
		res.end("Page Not Found !!!");
	}

}).listen(1234);

console.log("server is running .....");