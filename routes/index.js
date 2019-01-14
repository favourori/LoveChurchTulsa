let express = require("express");
let routes = express.Router();

routes.get("/", (req, res) => {
  res.send(
    "<h2>Love Church Tulsa - Mobile API</h2> <small>Version 1.0</small>"
  );
});
module.exports = routes;
