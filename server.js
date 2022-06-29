// Require dependencies
require("dotenv").config();
const express = require("express");
const cors = require('cors')
const logger = require('morgan')

// Connections to controller files
const friendsController = require('./constrollers/friendsController')

// Creating express app
const app = express();

// Using cors
app.use(cors())

// Using logger middleware
app.use(logger('dev'))

// Routes
app.use('/friends', friendsController)

// Defining ports
app.set("PORT", process.env.PORT || 8080);

app.listen(app.get("PORT"), () => {
  console.log(`PORT: ${app.get("PORT")}`);
});
