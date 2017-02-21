var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var clients = 0;

var nsp = io.of('/my-namespace');
nsp.on('connection', function(socket){
  console.log('someone connected');
  nsp.emit('hi', 'Hello everyone!');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
