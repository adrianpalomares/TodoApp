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

// Serve Vue app
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist/")));
    app.get("/*", (req, res) =>
        res.sendFile(path.join(__dirname, "../client/dist/index.html"))
    );
}

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`Listening on port: ${port}`);
});
