const express = require("express");
const cookieParser = require("cookie-parser");
const routes = require("./api/index");
const helpers = require("./helpers");
var cors = require("cors");

// create our Express app
const app = express();

app.use(cors());

// Takes the raw requests and turns them into usable properties on req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());

// pass variables to our templates + all requests
app.use((req, res, next) => {
  res.locals.h = helpers;
  res.locals.flashes = req.flash();
  res.locals.user = req.user || null;
  res.locals.currentPath = req.path;
  next();
});

// After allllll that above middleware, we finally handle our own routes!
app.use("/", routes);

// done! we export it so we can start the site in start.js
module.exports = app;
