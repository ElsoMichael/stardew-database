const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fishSchema = new Schema({
  name: String,
  price: String,
  boost1: String,
  boost2: String,
  location: String,
  time: String,
  season: String,
  weather: String
});

const Fish = mongoose.model("Fish", fishSchema);

module.exports = Fish;