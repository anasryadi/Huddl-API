// Require dependencies
const express = require("express");
const app = express();
const cors = require('cors')
require("dotenv").config();

// Connections to controller files
const friendsController = require('./constrollers/friendsController')

// Defining ports
app.set("PORT", process.env.PORT || 8080);

// Using cors
app.use(cors())

// Routes
app.use('/friends', friendsController)

app.listen(app.get("PORT"), () => {
  console.log(`PORT: ${app.get("PORT")}`);
});
