var http = require('http');
http.createServer(function(req,res){
  console.dir(req);
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.write("Hola Mundo!");
  setInterval(say,1000,res,"y demás planetas!") 


}).listen(8080)
var say = function(res,what){
  res.write(what);

}
console.log("Hola")
console.log("Mundo")
