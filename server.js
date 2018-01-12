var express = require("express");
var app = express();
var port = 8000;
var bp = require("body-parser");
var path = require("path");
var session = require("express-session");

app.use(express.static(path.join(__dirname, "/client")));
app.use(bp.json());
app.use(session({ secret: "boo" }));
app.set("views", path.join(__dirname, "/client"));
app.set("view engine", "ejs");

require("./server/config/mongoose.js")
require("./server/config/routes.js")(app)

app.listen(port, function () {
    console.log("listening on port 8000")
});