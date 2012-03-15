
/**
 * Module dependencies.
 */


var events = require('events')
   ,util = require('util')
   ,protobuf = require('protobuf')
   ,fs = require('fs')
//   ,profiler = require('v8-profiler')
   ,redis = require('redis')
   ,net = require('net');
// The "Schema" constructor lets you load a protocol schema definition
// (a compiled .proto file).
var Schema = protobuf.Schema;
var filelog=false;
exports.debug=false;
exports.debug_mode=true;
var msglog=fs.createWriteStream('./rcvmsglog.log');
var connection_id=0;
// "schema" contains all message types defined in feeds.proto|desc.
var schema = new Schema(fs.readFileSync('messages.desc'));
// The "Feed" message.
var Message = schema['node_md_msg.Msg'];

function MdClient(stream, options) {
  exports.debug_mode=exports.debug = false;
  this.nextpointer = 0;
  this.emitted_msgs = 0;
  this.lasttime = (new Date()).getTime();
  this.nextchunklength=0;
  this.lastmsgchunk=new Buffer(0);
  this.msglength=0;
  this.nextdata=false;
  this.stream = stream;
  this.options = options = options || {};

  this.connection_id = ++connection_id;
  this.connected = false;
  this.ready = false;
  this.connections = 0;
  if (this.options.socket_nodelay === undefined) {
      this.options.socket_nodelay = true;
  }
  this.should_buffer = false;
  this.max_attempts = null;
  if (options.max_attempts && !isNaN(options.max_attempts) && options.max_attempts > 0) {
      this.max_attempts = +options.max_attempts;
  }

  this.connect_timeout = false;
  if (options.connect_timeout && !isNaN(options.connect_timeout) && options.connect_timeout > 0) {
      this.connect_timeout = +options.connect_timeout;
  }

  this.closing = false;
  this.server_info = {};

  var self = this;

  self.initialize_retry_vars();
  this.stream.on("connect", function () {
      self.on_connect();
  });
    
  this.stream.on("data", function (buffer_from_socket) {
      self.on_data(buffer_from_socket);
  });

  this.stream.on("error", function (msg) {
      self.on_error(msg.message);
  });

  this.stream.on("close", function () {
      self.connection_gone("close");
  });

  this.stream.on("end", function () {
      self.connection_gone("end");
  });

  this.stream.on("drain", function () {
      self.should_buffer = false;
      self.emit("drain");
  });

  events.EventEmitter.call(this);
  var  redisclient = redis.createClient();
  var emittedMsgs = 0;
  this.emit_msg = function(message){
     //redisclient.publish('datafeed',message);
     //self.emit('msg',message);
     var self = this;
     //console.log("pausing...");
     //self.stream.pause();
    //process.nextTick(function(){ 
     var nummsg=self.emitted_msgs
     self.emitted_msgs++
     //console.log("mensajes recibidos: "+self.emitted_msgs)
     var tick=1000;
     if (nummsg % tick == 0){
       difftime = (new Date()).getTime() - self.lasttime;
       console.log("==================================");
       rate = tick/(difftime/1000) 
       console.log("Emitidos       : "+nummsg+" mensajes")
       console.log("               : "+rate+" msg/s")
       console.log("net buffer size: "+self.stream.bufferSize)
       console.log("ultimo mensaje: ");
       parsed=self.parseMsgBuff(message);
       console.log(parsed);
       console.log("---------------------------");
       self.lasttime=(new Date()).getTime()
       //console.log("Lasttime nuevo: "+self.lasttime);
       console.log(message);
       redisclient.publish('nodemsgrate', rate+" msgs/s");
     } 

       //console.log("Leído mensaje "+message);


       //redisclient.publish('datafeed',message);

  };
       
  
}

util.inherits(MdClient, events.EventEmitter);
exports.MdClient = MdClient;







MdClient.prototype.on_data = function (data) {
  var self = this;
  if (exports.debug_mode) {
    //console.log("net read " + this.host + ":" + this.port + " id " + this.connection_id + ": " + data.toString());
  }

  try {
    //que hacer con los datos
    self.processData(data); 
    //self.emit_msg(data); 
    //console.log('llamado a processData');
  } catch (err) {
    this.emit("parse_error", err);
  }
};//on_data

MdClient.prototype.on_connect = function () {
  if (exports.debug_mode) {
      console.log("Stream connected " + this.host + ":" + this.port + " id " + this.connection_id);
  }

  var self = this;

  this.connected = true;
  this.ready = false;
  this.attempts = 0;
  this.connections += 1;
  this.emitted_end = false;
  this.initialize_retry_vars();
  if (this.options.socket_nodelay) {
      this.stream.setNoDelay();
  }
  this.stream.setTimeout(0);

  this.addListener('msg',function(){
     var nummsg=self.emitted_msgs
     self.emitted_msgs++
     if (nummsg % 1000 == 0){
       difftime = (new Date()).getTime() - self.lasttime;
       console.log("Lasttime viejo: "+self.lasttime);
       console.log("Diferencia con actual: "+difftime);
       rate = 1000/(difftime/1000) 
       console.log("Emitidos : "+nummsg+" mensajes")
       console.log("         : "+rate+" msg/s")
       self.lasttime=(new Date()).getTime()
       console.log("Lasttime nuevo: "+self.lasttime);
     }        
  });
  this.emit("connect");

  if (this.options.no_ready_check) 
     this.on_ready();
};//on_connect

MdClient.prototype.on_ready = function () {
    var self = this;

    this.ready = true;
                                                                                                                        this.emit("ready");
};

MdClient.prototype.initialize_retry_vars = function () {
    this.retry_timer = null;
    this.retry_totaltime = 0;
    this.retry_delay = 150;
    this.retry_backoff = 1.7;
    this.attempts = 1;
};//initialize_retry_vars

MdClient.prototype.connection_gone = function(why) {
   var self = this, message;

    // If a retry is already in progress, just let that happen
   if (this.retry_timer) {
      return;
   }
   if (exports.debug_mode) {
        console.warn("Client connection is gone from " + why + " event.");
   }
   this.connected = false;
   this.ready = false;
   // since we are collapsing end and close, users don't expect to be called twice
   if (! this.emitted_end) {
      this.emit("end");
      this.emitted_end = true;
   }
   // If this is a requested shutdown, then don't retry
   if (this.closing) {
      this.retry_timer = null;
      if (exports.debug_mode) {
         console.warn("connection ended from quit command, not retrying.");
      }
      return;
   }
   this.retry_delay = Math.floor(this.retry_delay * this.retry_backoff);
   if (exports.debug_mode) {
       console.log("Retry connection in " + this.current_retry_delay + " ms");
   }
   if (this.max_attempts && this.attempts >= this.max_attempts) {
      this.retry_timer = null;
      // want the program to exit.  Right now, we just log, which doesn't really help in either case.
      console.error("md_client: Couldn't get Md connection after " + this.max_attempts + " attempts.");
      return;
   }
   this.attempts += 1;
   this.emit("reconnecting", {
             delay: self.retry_delay,
             attempt: self.attempts
   });
   this.retry_timer = setTimeout(function () {
      if (exports.debug_mode) {
          console.log("Retrying connection...");
      }
      self.retry_totaltime += self.current_retry_delay;
      if (self.connect_timeout && self.retry_totaltime >= self.connect_timeout) {
         self.retry_timer = null;
         console.error("md_client: Couldn't get Md connection after " + self.retry_totaltime + "ms.");
         return;
      }
      self.stream.connect(self.port, self.host);
      self.retry_timer = null;
   }, this.retry_delay);


};//connection_gone

MdClient.prototype.end = function () {
    this.stream._events = {};
    this.connected = false;
    this.ready = false;
    return this.stream.end();
};//end

MdClient.prototype.on_error = function (msg) {
    var message = "Md connection to " + this.host + ":" + this.port + " failed - " + msg,
        self = this, command_obj;

    if (this.closing) {
        return;
    }

    if (exports.debug_mode) {
        console.warn(message);
    }


    this.connected = false;
    this.ready = false;

    this.emit("error", new Error(message));
    // "error" events get turned into exceptions if they aren't listened for.  If the user handled this error
    //     // then we should try to reconnect.
    this.connection_gone("error");
};//on_error
MdClient.prototype.processData = function (buffer) {
  var self = this;
  //console.log("Empiezo a procesar un data de longitud: "+buffer.length);
  nextdata=false;

  data=new Buffer(buffer);
  msgbuff = new Buffer(0);
  this.nextpointer=0;

  while( nextdata==false ){
    if(exports.debug)        console.log("Longitud del buffer: "+data.length);
   
    if (self.nextchunklength!=0){//el buffer tiene la longitud en un data anterior
      msglength=self.lastmsgchunk.length+self.nextchunklength;
      msgbuff=new Buffer(msglength);
      msgbuff=fillBuff(msgbuff);
      if (exports.debug)      console.log("En lastmsgchunk teniamos:");
      if (exports.debug)      console.log(self.lastmsgchunk);
      self.lastmsgchunk.copy(msgbuff,0,0,lastmsgchunk.length);//el chunk anterior va al principio del mensaje
      if (exports.debug)      console.log("En msgbuff tenemos:");
      if (exports.debug)      console.log(msgbuff);
      data.copy(msgbuff,self.lastmsgchunk.length,0,self.nextchunklength);//ponemos el nextchunk en lo que queda
      if (exports.debug)      console.log("En msgbuff hemos metido la parte de nextchunk");
      if (exports.debug)      console.log(msgbuff);
      if (exports.debug)      console.log("hemos arrastrado un lastchunk y en total tenemos un mensaje de "+msgbuff.length);
//          try{
      var mensaje = self.parseMsgBuff(msgbuff);
          //console.log("Mensaje parseado:"+mensaje);
          //necesitamos un buffer con la longitud
      try{
        var serialized = serializeMsgString(mensaje); //esto se envia al cliente
        if (serialized.length - msgbuff.length !=4){ 
          if(exports.debug) console.log("Long distintas: Con nexchunklength distinto de cero :Longitud recibida del md "+msgbuff.length+" longitud enviada "+serialized.length);
          if(exports.debug) console.log("Msgbuff");
          if(exports.debug) console.log(msgbuff);
          if(exports.debug) console.log("Serialized");
          if(exports.debug) console.log(serialized);
        }else if(exports.debug) console.log("con nextchunklength longitudes iguales");
          //serversocket.write(serialized);
          self.emit_msg(serialized.slice(4)); 
          console.log('msg emitted'); 
      }catch(e){ console.log("eeeeck"+e)};
         data=data.slice(self.nextchunklength);//cortamos data para que empiece correcto
         if (exports.debug) console.log("Nos queda un data de longitud: "+data.length);
         self.lastmsgchunk=new Buffer(0);
         self.nextchunklength=0;
      }
      if (data.length == 0){
        nextdata=true;
        if (exports.debug) console.log("Termino de procesar un data porque me quedaba con longitud 0");
        if (exports.debug) console.log("**************************************************************************");
      }else{
          if (exports.debug) console.log("El data tiene tamaño :"+data.length);
          if (self.lastmsgchunk.length !=0){
            if (exports.debug) console.log("Procesando un lastmsgchunk con info de longitud y de tamaño: "+lastmsgchunk.length);
            newdata = new Buffer(self.lastmsgchunk.length+data.length);
            self.lastmsgchunk.copy(newdata);
//            if(exports.debug) console.log("En data tenemos:");
//            if(exports.debug) console.log(data);
//            if(exports.debug) console.log("Copiado lastmsgchunk a newdata");
 //           if(exports.debug) console.log(newdata);
            data.copy(newdata,self.lastmsgchunk.length);
//            if(exports.debug) console.log("Copiado data a newdata");
//            if(exports.debug) console.log(newdata);
            data = new Buffer(newdata.length);
            newdata.copy(data);
          }
          if (exports.debug) console.log("Lastmsgchunk es cero");
          var msglength = getMsgLength(data);
          if (exports.debug) console.log("Longitud del mensaje calculada: "+msglength);
          var msglengthbuff=new Buffer(4);
          data.copy(msglengthbuff,0,0,4);
          if (exports.debug) console.log(msglengthbuff);

          //  console.log("Contenido del buffer: \n  |"+buffer.toString()+"|");
          //Hacemos un nuevo buffer con esa longitud y copiamos los datos ahí
          var msgbuff = new Buffer(msglength);
          msgbuff=fillBuff(msgbuff);
          //if(exports.debug)      console.log("buffer reseteado: ");
          if(exports.debug)      console.log(msgbuff);
          var msginit=4;
          nextpointer=msglength+msginit;
          if (nextpointer > data.length) {//en caso de overflow tenemos que ir al siguiente "data" 
            self.lastmsgchunk=new Buffer(data.length-4);
            data.copy(self.lastmsgchunk,0,4,data.length);
            if (exports.debug) console.log("Llevamos un lastmsgchunk de longitud: "+self.lastmsgchunk.length+" al siguiente data");
            this.nextchunklength=msglength-self.lastmsgchunk.length;
            if (exports.debug) console.log("El siguiente data tendra un nextchunk de longitud: "+nextchunklength);
            nextdata=true;
          }else{
            if (exports.debug) console.log("msglength es: "+msglength);
            if (exports.debug) console.log("msgbuff.length es: "+msgbuff.length);
            //-1 o no -1
            data.copy(msgbuff,0,4,nextpointer);//metemos el mensaje en msgbuff
//            try{
              var mensaje = self.parseMsgBuff(msgbuff);
              //console.log("Mensaje parseado:"+mensaje);
              var msglengthbuff= new Buffer(4);
              data.copy(msglengthbuff,0,0,4);
              
          try{
          var serialized = serializeMsgString(mensaje); //esto se envia al cliente
            if(serialized.length-msgbuff.length != 4) { 
              if(exports.debug) console.log("Long distintas: Longitud recibida del md "+msgbuff.length+" longitud enviada "+serialized.length);
              if(exports.debug) console.log("Msgbuff");
              if(exports.debug) console.log(msgbuff);
              if(exports.debug) console.log("Serialized");
              if(exports.debug) console.log(serialized);
             }else if(exports.debug) console.log("Longitudes iguales");
              //serversocket.write(serialized);          
              self.emit_msg(serialized.slice(4));
              //console.log('emitido msg (lin 358)');
              //eventos.emit('otromd',"otrocarajo");
          }catch(e){ console.log("Error en la serializacion"+e)};


//            }catch (e){
  //            console.log("Error al parsear/serializar "+e);
    //        }
            if(exports.debug) console.log("Tenemos un data de longitud: "+data.length);
//            if(exports.debug) console.log(data);
            data=data.slice(nextpointer);
            if(exports.debug) console.log("Tras cortar nos queda un data de longitud: "+data.length);
//            if(exports.debug) console.log(data);
            self.lastmsgchunk= new Buffer(0);
            if (data.length <= 4 && data.length > 0){
              if (exports.debug) console.log("Nos tenemos que llevar un lastchunk con info sobre la longitud");
              self.lastmsgchunk = new Buffer(data.length);
              data.copy(self.lastmsgchunk);
            if(exports.debug)   console.log("...con contenido:");
            if(exports.debug)   console.log(lastmsgchunk);
              nextdata=true;
            };//if lastmsgchunk contiene longitud
          };//end else
        }; //if data con longitud 0
//        } catch(e){console.log("Error al manipular los buffers: "+e);}
    
      };//while
    
};//process data

MdClient.prototype.parseMsgBuff = function(msgbuff){
  var self = this;
  try{
    var parsed = Message.parse(msgbuff);
    if (exports.debug) console.log("Mensaje Parseado: ");
    if (exports.debug) console.log(JSON.stringify(parsed, null, 2)); 
    var mensaje=JSON.stringify(parsed);
    self.emit('jsonmsg',mensaje);
  
    if (filelog) msglog.write(mensaje+"\n");
  }catch( e) {
      console.log("error al parsear msgbuff: "+e);
      console.log("-------------------------------------------");
      console.log(msgbuff);
      console.log("-------------------------------------------");
      
//      console.log(getBytesString(msgbuff)+"\n :::::error::::: "+e);
      throw new Error("No se pudo parsear msgbuff:"+e); 
    }
//    console.log("=====================================================================");
  return parsed;
};

exports.createMdClient = function (port_arg, host_arg, options) {
    var port = port_arg || default_port,
        host = host_arg || default_host,
        md_client, net_client;

    net_client = net.createConnection(port, host);

    md_client = new MdClient(net_client, options);

    md_client.port = port;
    md_client.host = host;

    return md_client;
};
exports.createFileMdClient = function (filepath_arg, options) {
    var default_filepath = "./messages.log";
    var filepath = filepath_arg || default_filepath;

    file_stream = fs.createReadStream(filepath);

    md_client = new MdClient(file_stream, options);
    return md_client;
};





//private functions
function fillBuff(buffer){
  if (buffer.length< 0) throw new Error("El bufer esta mal");
  for(var i=0, l = buffer.length; i<l; i++)
    buffer[i]="U";
  return buffer
};
function getMsgLength(buffer){
  return buffer[0] + (buffer[1] << 1*8) + (buffer[2] << 2*8) + (buffer[3] << 3*8 >>> 0);
};
function getLengthBuffer(length){
  var buffer = new Buffer(4);
  buffer=fillBuff(buffer);
  buffer[0]= length << 24 >>> 24
  buffer[1]= length >>> 8 << 24 >>> 24
  buffer[2]= length >>> 16 << 24 >>> 24
  buffer[3]= length >>> 24 << 24 >>> 24
  var newlength=getMsgLength(buffer);
  if (newlength != length)  if(exports.debug) console.log("Buffer length es :" +length+" pero la longitud sacada del buffer calculado es: "+newlength);
  return buffer;
};
function getBytesString(buffer){
  var string="|";
  for (var i=0,l=buffer.length; i<l; i++)
    string+=buffer[i]+"|";
  return string;
};
function serializeMsgString(msgbuff){
    try{
    var serialized = Message.serialize(msgbuff);
    if (typeof serialized == 'undefined' || serialized.length == 0) throw new Error("La longitud del mensaje serializado es 0 o es undefined");
    }catch(e){
       throw new Error("El mensaje no ha podido serializarse "+msgbuff+e);
    }

    outputbufflength=4+serialized.length;
    var outputbuff = new Buffer(outputbufflength);
    outputbuff=fillBuff(outputbuff);
    lengthbuff=getLengthBuffer(serialized.length);
    lengthbuff.copy(outputbuff);
    serialized.copy(outputbuff,4);
    return outputbuff;



};







//module.exports = MdClient.createConnection;
