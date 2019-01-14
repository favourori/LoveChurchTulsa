let express = require("express");
let app = express();
let bodyParser = require("body-parser");

//import routes here
let indexRoute = require("./routes/index");

//--------------------------------------
//All Middlewares here
//--------------------------------------
app.use(bodyParser.json());
//--------------------------------------
//All Routes here
//--------------------------------------

//Welcome Route

app.use("/", indexRoute);

//--------------------------------------
//Server here
//--------------------------------------
let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
