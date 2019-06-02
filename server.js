var express = require("express");
var path = require('path')
var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var expressHandlebars = require("express-handlebars");

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use(routes);
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});