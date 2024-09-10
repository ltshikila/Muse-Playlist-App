"use strict";

var express = require("express");
var path = require("path");

// CREATE APP
var app = express();

// SERVE A STATIC PAGE FROM THE PUBLIC DIRECTORY
app.use(express["static"](path.join(__dirname, "../../frontend/public")));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../../frontend/public/index.html"));
});

// PORT TO LISTEN TO
var PORT = process.env.PORT || 3210;
app.listen(PORT, function () {
  console.log("Listening on http://localhost:".concat(PORT));
});