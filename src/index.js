/* eslint-disable no-undef, no-unused-vars */
// init project
var express = require("express");
var Sequelize = require("sequelize");
var app = express();
var bodyParser = require("body-parser");

// Using `public` for static files: http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// Initial set of users to populate the database with
var defaultUsers = ["Tony Stark", "Peter Parker", "Steve Rogers"];
var users = defaultUsers.slice();
// Use bodyParser to parse application/x-www-form-urlencoded form data
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const userRouter = require("./routes/Users");

app.use("/", urlencodedParser, userRouter);

// Listen on port 8080
var listener = app.listen(8080, function() {
  console.log("Listening on port " + listener.address().port);
});
