//const cors = require('cors');
const http = require('http');
const express = require('express');
const path = require('path');
const mongo = require('mongoose');
const socket = require('socket.io');

//settings server
const app = express();
const server = http.createServer(app);

//settings Socket
const io = socket.listen(server);
require('./sockets')(io);

//DB connection
mongo.connect('mongodb://localhost/chats')
.then()
.catch(err => console.log(err));

//settings
app.set('port', process.env.PORT || 3000);

//start page
app.use(express.static(path.join(__dirname,'public')));

//start server
server.listen(app.get('port'), () => {
    //console.log('server on port ', app.get('port'));
});
