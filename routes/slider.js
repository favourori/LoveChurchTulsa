let express = require("express");
let routes = express.Router();

//importing Model for Slider
let Slider = require("../model/slider");

routes.get("/sliders", (req, res) => {
  Slider.find().then(sliders => {
    res.status(200).send({
      success: true,
      sliderData: sliders
    });
  });
});

routes.post("/sliders", (req, res) => {
  //creating a new Slider
  let slider = new Slider({
    title: req.body.title,
    subtitle: req.body.subtitle,
    image: req.body.image
  });

  slider
    .save()
    .then(savedData => {
      res.status(200).send({
        success: true,
        newSlider: savedData
      });
    })
    .catch(err => {
      res.send(err.message);
    });
});

module.exports = routes;
