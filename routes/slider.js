let express = require("express");
let routes = express.Router();



routes.get("/sliders", (req, res) => {
  res.status(200).send({
    title: "Slider titles",
    image: "Slider Images here"
  });
});

routes.post("/sliders", (req, res) => {
  res.status(200).send("You've hit the post route for sliders");
});

module.exports = routes;
