const express = require("express");
const cookieParser = require("cookie-parser");
const routes = require("./api/index");
var cors = require("cors");

const app = express();

app.use(cors());

// Takes the raw requests and turns them into usable properties on req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());

// After allllll that above middleware, we finally handle our own routes!
app.use("/api", routes);

// import environmental variables from our variables.env file
require("dotenv").config({ path: "variables.env" });

app.set("port", process.env.PORT || 7777);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
