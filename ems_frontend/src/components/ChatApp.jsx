const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

const onlineUsers = new Set();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    io.emit('connection', 'a user connected');
    console.log('a user connected');

    socket.on('setName', (name) => {
        socket.name = name;
    });
    socket.on('userConnected', (name) => {
        socket.username = name; 
        onlineUsers.add(name);
        io.emit('updateUserList', Array.from(onlineUsers));
    });
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    })
    socket.on('userTyping', (data) => {
        console.log("user typing here : ", data);
        socket.broadcast.emit('userTyping', data);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
        onlineUsers.delete(socket.name);
        io.emit('updateUserList', Array.from(onlineUsers));
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});