const connectNewUser = () => {
  global.io.on("connection", function (socket) {
    console.log("New User Connected..");
    setInterval(() => {
      socket.emit("msg", {
        time: new Date().toLocaleTimeString("bn-BD"),
      });
    }, 1000);

    socket.on("disconnect", function () {
      console.log("User Disconnected.");
    });
  });
};

module.exports = { connectNewUser };
