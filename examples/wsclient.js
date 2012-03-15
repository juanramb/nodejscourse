var WebSocketClient = require('websocket').client;
var client = new WebSocketClient();
var rmessages = 0; 
var lasttime=(new Date()).getTime();
var tick = 1;

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection) {
    console.log('WebSocket client connected');
    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function() {
        console.log('md-protocol Connection Closed');
    });
    connection.on('message', function(message) {
	
        if (message.type === 'binary') {
	    if (rmessages % tick == 0){
            console.log("Received: '" + message.binaryData + "'");
	    recordTime()

            }
            rmessages++;
        }
    });

});

client.connect('ws://jarama.gul.es:3004/', 'myprotocol');


var recordTime= function(){
	if ( lasttime != 0){
	difftime = (new Date()).getTime() - lasttime;
	console.log("==================================");
       	rate = tick/(difftime/1000) 
       console.log("Recibidos       : "+rmessages+" mensajes")
       console.log("               : "+rate+" msg/s")
       console.log("---------------------------");
       }
       lasttime=(new Date()).getTime()
}
/*
socket.on('connect', function(){
	console.log("connected");
	socket.emit('auth', {userid: 143523452, apikey: "fadfasdfasf"},function(data){
		console.log("Auth response received");
		
	});
	socket.on('md_msg', function(message){
		//console.log(message.length);
		if ( rmessages % tick == 0 ){
			recordTime();
     		} 
     		rmessages++

	});

});
socket.on('disconnect', function(error){
	console.dir(error);

});
*/
