const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animalSchema = new Schema({
  name: String,
  cost: String,
  produces: [String]
});

const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;