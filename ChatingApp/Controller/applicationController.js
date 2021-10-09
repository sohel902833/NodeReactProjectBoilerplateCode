const path = require("path");
const getHome = (req, res, next) => {
  res.sendFile(path.resolve(__dirname + "/../index.html"));
};

module.exports = {
  getHome,
};
