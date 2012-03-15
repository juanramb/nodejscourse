var http = require('http');
http.createServer(function(req,res){
  res.writeHead(200, {
    "content-type": "text/plain",
    "connection": "keep-alive"});
  res.write("Hola Mundo!");
  setInterval(say,1000,res,"y demás planetas!") 
  setTimeout(function(){
	  res.end()
  }, 10000);

}).listen(8081, "jarama.gul.es")
var say = function(res,what){
  res.write(what);

}
console.log("Hola")
console.log("Mundo")
