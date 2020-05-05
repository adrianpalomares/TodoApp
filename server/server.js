/*

Setup of a Node.js server with Express.
Routes are included in ./api/routes.js

Filename: server.js
Author: Adrian Palomares
Date: May 5, 2020

*/

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var path = require("path");

app.use(express.json());
app.use(cors());

// Setup router
const routes = require("./api/routes");
app.use(routes);

//Edit page
app.get("/edit/:id", function(request, response) {
  response.sendFile(path.join(__dirname + "/../client/edit.html"));
});

// Main page
app.get("/", function(request, response) {
  response.sendFile(path.join(__dirname + "/../client/main.html"));
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Listening on port: ${port}`);
});
