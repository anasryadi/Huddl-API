const { default: mongoose } = require("mongoose");
const mongosse = require("../db/connection");

const friendSchema = new mongoose.Schema({
  Activity: String,
  Restaurant: String,
  Movie: String
});

module.exports = mongoose.model("Friends", friendSchema);
