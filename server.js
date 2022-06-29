// Require dependencies
const express = require("express");
const app = express();
require("dotenv").config();

// Connections to controller files
const friendsController = require('./constrollers/friendsController')

// Defining ports
app.set("PORT", process.env.PORT || 8080);

// Routes
app.use('/friends', friendsController)

app.listen(app.get("PORT"), () => {
  console.log(`PORT: ${app.get("PORT")}`);
});
