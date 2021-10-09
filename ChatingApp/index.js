const express = require("express");
const app = express();
const { connectNewUser } = require("./Controller/socketIo");
const http = require("http");
const path = require("path");
const httpServer = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(httpServer);
global.io = io;
connectNewUser();

app.use(express.static("client/build"));
app.use("/", require("./Router/applicationRoutes"));

app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
//run the server
const PORT = 3001;
httpServer.listen(PORT, () => {
  console.log("App Is Running On Port " + PORT);
});
