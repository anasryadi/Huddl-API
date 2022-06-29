// Require dependencies
const express = require("express");
const app = express();
require('dotenv').config()

// Connections to controller files

// Defining ports
app.set("PORT", process.env.PORT || 8080);

// app.get("/", (req, res) => {
//   console.log("Here");
//   res.render("index");
// });



app.listen(app.get("PORT"), () => {
  console.log(`PORT: ${app.get("PORT")}`);
});
