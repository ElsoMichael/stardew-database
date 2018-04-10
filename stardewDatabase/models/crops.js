const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cropSchema = new Schema({
  name: String,
  seedPrice: String,
  harvest: String,
  sellPrice: String,
  season: String
});

const Crop = mongoose.model("Crop", cropSchema);

module.exports = Crop;