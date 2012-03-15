
/**
 * Module dependencies.
 */
var profiler = require("v8-profiler");

var express  = require('express')
    ,routes   = require('./routes')
    ,redis  = require('redis')
    ,io = require('socket.io')

    ,md = require('./mdclient.js');

//POR DEFECTO NO USAMOS EL CLIENTE QUE SE CONECTA AL MD, SINO REDIS
//var mdclient = module.exports = md.createMdClient(3333,"10.5.3.231");

//var mdclient = module.exports = md.createFileMdClient();
var app = module.exports = express.createServer();
var msgtosend="";
function getMdClient(){
  var self = this;
  console.log("Devolviendo un mdclient: "+mdclient);
  return self.mdclient;
}
// Configuration


//mdclient.on('msg', function(client){console.log("recibido: "+client)});
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', function(req, res){
  res.render('index');
});


//Si se entra en http://ip:puerto/socketioapp los mensajes a y desde el navegador
//se pasan usando socket.io
app.get('/socketioapp', function (req,res){
  res.render('index',
             {title: 'Messages using socket.io',
              layout: 'socketio'
            });

});
//Si se entra a /sseventsapp se generan mensajes hace el browser por ssevents
app.get('/sseventsapp', function(req, res){
  res.render('index');
});
//TODO: no implementado
app.get('nodewsapp', function(req,res){
  res.render('index',
             {title: 'Messages using nodews',
              layout: 'nodews'
            });

});

app.get('/update-stream', function(req, res) {
  // let request last as long as possible
//  sendSSE(req,res);
  console.log("Recibida peticion en update-stream "+req);
  req.socket.setTimeout(Infinity);
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });
  res.write(' \n')
  console.log("Client connected  on update-stream "+req.socket);
  var messageCount = 0;

  var redisClient = redis.createClient(null,null, {return_buffers:true});
  redisClient.subscribe('datafeed');
  redisClient.on('message', function(channel,msg) {
    messageCount++; // Increment our message count
    console.log("recibido mensaje de datasource: "+msg.toString());
    sendSSE(req,res,msg);
  });
 
  console.log('Subscrito a redis channel datafeed');
//  console.log(mdclient._events['msg'].toString());
  //send headers for event-stream connection

  res.write('\n');

  // The 'close' event is fired when a user closes their browser window.
  // In that situation we want to make sure our redis channel subscription
  // is properly shut down to prevent memory leaks...and incorrect subscriber
  // counts to the channel.
  req.on("close", function() {
     console.log('Web client disconnected');
     redisClient.end();
  });
});

/*app.get('/fire-event/:event_name', function(req, res) {
  publisherClient.publish( 'updates', ('"' + req.params.event_name + '" page visited') );
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('All clients have received "' + req.params.event_name + '"');
  res.end();
});
*/
app.listen(8000);
//SOCKET.IO STUFF
//io = io.listen(app, {transports: ['websocket'],'force new connection': true,'log level': 2});
io = io.listen(app, {'force new connection': true,'log level': 2});
io.sockets.on('connection', function (socket) {
   //console.log("New connection from " + socket.address.address + ":" + socket.address.port);

   var startTime=(new Date()).getTime();
   var redisTClient = redis.createClient();
   var sentmessages=0;
   redisTClient.del("stime");
   redisTClient.del("rtime");
   redisTClient.del("ldelays");
   var on_clientMessage = function (clientmessage){
        clientts=(new Date()).getTime();
        clientmessage.clientts=clientts;
        diferencia=clientmessage.clientts-clientmessage.serverts;
//        redisTClient.rpush("ldelays", JSON.stringify({index: clientmessage.serverts, lag:  diferencia}));
        redisTClient.rpush("ldelays", diferencia);
        redisTClient.rpush("rtime", clientts-startTime);
/*        console.log("SOCKET.IO STUFF in callback from client");
       console.log("---Received Message number: "+clientmessage.msgnumber);
        console.log("---Delay from server to client and back: "+diferencia+ " MSG: " +clientmessage.message);
*/
   }
   var on_rawClientMessage = function(rawmessage){
        console.log("received raw message from client de tamaño: "+rawmessage.length);

   }

   var msgCallback = function (channel, msg){
     if (msg.length < 200){
        sentmessages++;
//        console.log("Recibido de redis un msg de long: "+msg.length); 
        var timestamp = (new Date()).getTime();
        var message={serverts: timestamp, clientts: 0 , message: msg, msgnumber: sentmessages};
//        console.log("Emitiendo un mensaje de : "+message.message.length);
        var self = this;
        //socket.emit('message',message,on_clientMessage);
        socket.emit('cbmessage',message,on_clientMessage);
        //socket.emit('cbrawmessage',msg,on_rawClientMessage);
     }//if msg.length < 500
   };
   
   var redisClient = redis.createClient(null,null, {return_buffers:true});


   redisClient.subscribe('datafeed');
//   redisClient.subscribe('datafeedsample');
   var samplemessageo = "";
   redisTClient.lindex("sampledata", 0, function (err,data){
      samplemessageo=msgtosend = {serverts: 0, clientts: 0 , message: data, msgnumber: 0};
       //  sendData();
      continuous_send();
   });
/*   setInterval(function (sampledata) {
     redisTClient.publish('datafeedsample', sampledata);
   }, 1,sampledata);
*/
   console.log("Timestamp inicial: "+(new Date()).getTime());
   var mymessages=0;

   var sendMessage = function(message,callback){


//     console.log("message es: "+message);
     if (message == undefined|message == "") {console.log("message es undefined");throw new Error("message es undefined");}
     //cb será on_clientMessage
     if (mymessages%1000 == 0){
     var timestamp = (new Date()).getTime();
     redisTClient.rpush("stime", timestamp-startTime);
     }
     socket.emit('cbmessage',message,callback);
     mymessages++;
   }
   var async_sendMessage = function(message, callback){
     process.nextTick(function(){
	sendMessage(message, callback);
     })
   }
   var continuous_send = function(){
     async_sendMessage(msgtosend, on_clientMessage);
     process.nextTick(continuous_send)
   }


   redisClient.on('message', msgCallback);
   socket.on('disconnect',function(error,socket){
     console.log("disconnection error: "+error);
     redisClient.removeListener('msg',msgCallback);
     redisClient.end();
     console.log("Disconnected client");
   }, socket.id);
//   sendData("tururu",sampledata);

});//on_connection


console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

function sendSSE(req, res,message) {
  var id = (new Date()).getTime();
  constructSSE(res, id, message);
}

function constructSSE(res, id, data) {

    var theString = 'id: '+id+'\n'+'data: '+data+'\n\n';

    res.write(theString);

}
