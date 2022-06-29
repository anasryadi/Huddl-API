// Require dependencies
const express = require("express");
const app = express();
const cors = require('cors')
const logger = require('morgan')
require("dotenv").config();

// Connections to controller files
const friendsController = require('./constrollers/friendsController')

// Defining ports
app.set("PORT", process.env.PORT || 8080);

// Using cors
app.use(cors())

// Using logger middleware
app.use(logger('dev'))

// Routes
app.use('/friends', friendsController)

app.listen(app.get("PORT"), () => {
  console.log(`PORT: ${app.get("PORT")}`);
});
