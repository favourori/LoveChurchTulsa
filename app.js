let express = require("express");
let app = express();
let bodyParser = require("body-parser");

//import routes here
let indexRoute = require("./routes/index");
let sliderRoute = require("./routes/slider");

//--------------------------------------
//All Middlewares here
//--------------------------------------
app.use(bodyParser.json());
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
