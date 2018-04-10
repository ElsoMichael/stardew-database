const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const villagerSchema = new Schenma({
  name: String,
  birthday: String,
  bestGifts: [String],
  loves: [String],
  likes: [String],
  neutral: [String],
  dislikes: [String],
  hates: [String]
});

const Villager = mongoose.model("Villager", villagerSchema);

module.exports = Villager;