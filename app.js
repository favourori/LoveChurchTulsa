let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

//connecting to mongoose

mongoose
  .connect(
    ""
  )
  .then(() => {
    console.log("Connected to Mongo Db");
  })
  .catch(err => {
    console.log("Oops could not connect to mongo db! ", err.message);
  });

//import routes here
let indexRoute = require("./routes/index");
let sliderRoute = require("./routes/slider");

//--------------------------------------
//All Middlewares here
//--------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//--------------------------------------
//All Routes here
//--------------------------------------

//Welcome Route

app.use("/", indexRoute);
app.use("/api/media", sliderRoute);

//--------------------------------------
//Server here
//--------------------------------------
let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
