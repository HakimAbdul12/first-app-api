import express from "express";
import http from "http";
import { Server } from "socket.io";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
import branchesRoutes from "./routes/branches.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = 3000;

app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.sendFile('C:/My_Programs/Express/first-app-api/index.html');
// });

// io.on('connection', (socket) => {
//   console.log('A user connected');

//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   });

//   socket.on('chatMessage', (message) => {
//     console.log('Received message:', message);
//     // Broadcast the message to all clients
//     io.emit('chatMessage', message);
//   });
// });

app.use('/users', usersRoutes);
app.use('/branches', branchesRoutes);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
