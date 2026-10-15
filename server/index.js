const express = require("express");
//  creates a new express application
const app = express();
// transfer data over HTTP
const http = require("http");
// turn our computer into a server
const server = http.createServer(app);
// pass your created server to socket.io.
const socket = require("socket.io");
const io = socket(server);

io.on("connection", onConnection);
// listen for a drawing
function onConnection(socket) {
  socket.on("drawing", (data) => socket.broadcast.emit("drawing", data));
}
//  decide on a port to listen on.
const port = 8081;
// Development demo without authentication: accept local connections only.
server.listen(port, "127.0.0.1", () => console.log(`server is running locally on port ${port}`));
