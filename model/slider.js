let mongoose = require("mongoose");

let sliderSchema = mongoose.Schema({
  title: { type: String, require: true },
  subtitle: { type: String, required: true },
  image: { type: String, required: true }
});

let Slider = mongoose.model("slider", sliderSchema);

module.exports = Slider;
