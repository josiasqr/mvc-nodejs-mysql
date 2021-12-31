const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const path = require("path");

/*
 * express app
 */
const app = express();

/*
 * Using pug template
 */
app.set("views", path.join(__dirname, "app/views"));
app.set("view engine", "pug");

/*
 * Middleware
 */
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

/*
 * Routing
 */
const employeeRouter = require("./app/routes/employee");
app.use("/employee", employeeRouter);

app.listen(3000, function () {
  console.log("***** Server on the port 3000 *****");
});
