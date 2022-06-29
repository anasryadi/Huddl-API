// const { default: mongoose } = require("mongoose");
const mongoose = require("../db/connection");

const friendSchema = new mongoose.Schema({
  Activity: String,
  Restaurant: String,
  Movie: String
});

module.exports = mongoose.model("Friends", friendSchema);
