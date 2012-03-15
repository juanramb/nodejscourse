var WebSocketServer = require('websocket').server
    ,http = require('http')
    ,io = require('socket.io'); 


var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
server.listen(3004, function() {
    console.log((new Date()) + ' Server is listening on port 3004');
});
wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});
function originIsAllowed(origin) {
  //put logic here to detect whether the specified origin is allowed.
  return true;
}

var connectedUserId=0;
var siomessages=0;
var lasttime=0;
var tick=5000;
var recordTime= function(){
	if ( lasttime != 0){
	difftime = (new Date()).getTime() - lasttime;
	console.log("==================================");
       	rate = tick/(difftime/1000) 
       console.log("Publicados       : "+siomessages+" mensajes")
       console.log("               : "+rate+" msg/s")
       console.log("---------------------------");
       }
       lasttime=(new Date()).getTime()
}
var mdstatus = function(){
  console.log("%%%%%%%%%%%%%STATUS%%%%%%%%%%%%%%");
  //console.log("#socketio status");
  //console.dir(socketio);
  //console.log("#socketio sockets");
  //console.dir(socketio.sockets);
  console.log("#sent messages");
  console.log(siomessages);
  //console.log("#ws server status");
  //console.dir(wsServer);
  console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
};
//sacamos el status cada 10s
setInterval(function(){ mdstatus();},10000);

//ws control
wsServer.on('request', function(request) {
    if (!originIsAllowed(request.origin)) {
      // Make sure we only accept requests from an allowed origin
      request.reject();
      console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
      return;
    }
    var connection = request.accept('myprotocol', request.origin);
    console.log((new Date()) + ' Connection accepted.');

    function sendMessage(message){
	if (connection.connected) {
	  connection.sendBytes(message)
	  siomessages++
	}
	if (siomessages % tick == 0){
		recordTime();
   	}
//	process.nextTick(function(){

//   	});
    }

//meter el cliente redis para coger los mensajes
    connection.on('message', function(message) {
      if (message.type === 'utf8') {
        console.log('Received Message: ' + message.utf8Data);
        connection.sendUTF(message.utf8Data);
      }
      else if (message.type === 'binary') {
        console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
        connection.sendBytes(message.binaryData);
      }
    });//connection on message
    connection.on('close', function(reasonCode, description) {
      console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
      mdclient.removeListener('md_msg',sendMessage);
    });
});//on ws request


var clearMdclientListeners = function(){
mdclient.removeAllListeners("md_msg");
};
var initMdclient = function(){
mdclient.on("md_msg", function(message){

   if (siomessages % tick == 0){
	recordTime();
   }
   process.nextTick(function(){
   socketio.sockets.emit('md_msg',{ my: message});
   siomessages++
   });
   
});
};
