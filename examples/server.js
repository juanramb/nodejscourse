var redis = require('redis');
var net = require('net');
var redisClient = redis.createClient(null,null, {return_buffers:true});
var lasttime = (new Date()).getTime();
var server = new net.Server();
var socket =undefined;
var msgtosend = undefined;
var messages = 0;

var sendMessage = function(message,callback){

  if (typeof socket != 'undefined' & typeof message != 'undefined'){
    if (socket.writable & ! socket.destroyed){
    socket.write(message, callback);
    }
  }

}
var async_sendMessage = function(message, callback){
  process.nextTick(function(){
     sendMessage(message, callback);
  })
}
var on_sentMessage = function (){
  messages++
  var self = this;
  if (messages % 100 == 0){
    difftime = (new Date()).getTime() - lasttime;
    console.log("==================================");
    console.log("Lasttime viejo: "+lasttime);
    console.log("Diferencia con actual: "+difftime);
    rate = 100/(difftime/1000) 
    console.log("Emitidos       : "+messages+" mensajes")
    console.log("               : "+rate+" msg/s")
    console.log("---------------------------");
    lasttime=(new Date()).getTime()
    //console.log("Lasttime nuevo: "+self.lasttime);
  }        

}
var continuous_send = function(){
  async_sendMessage(msgtosend, on_sentMessage);
  setTimeout(function(){
  process.nextTick(continuous_send)
  },10);
}
var port=6666
server.listen(3666, function(){console.log("Server listening on port:"+port)});
server.on('error', function (e) {
  if (e.code == 'EADDRINUSE') {
    console.log('Address in use, retrying...');
    setTimeout(function () {
      server.close();
      server.listen(port,host);
    }, 1000);
  }
});
server.on('connection', function(s){
  var messages=0;
  socket = s;
  continuous_send();
  s.on("error",function(){
    s.destroy();
  });

});
server.on('close', function(socket){
  console.log("Closing ");
  console.dir(socket);
  socket.end();
});
