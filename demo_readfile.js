var http=require('http');
var fs=require('fs');
var url=require('url');
http.createServer(function(req,res){
	/*fs.readFile('demofile1.html',function(err,data){
		res.writeHead(200,{'Context-Type':'text/html'});
		res.write(data);
		res.end();
	});
	fs.appendFile('mynewfile1.txt','Hello content!',function(err){
		if(err) throw err;
		console.log('Saved!');
	});
	fs.unlink('mynewfile1.txt',function(err){
		if(err) throw err;
		console.log('File deleted!');
	});
	var adr='http://localhost:8080/default.htm?year=2017&month=february';
	var q=url.parse(adr,true);
	console.log(q.host);
	console.log(q.pathname);
	console.log(q.search);
	var qdata =q.query;
	console.log(qdata.month);
	*/
	var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
	
}).listen(8085);