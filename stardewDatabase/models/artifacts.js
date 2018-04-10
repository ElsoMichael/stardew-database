const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artifactSchema = new Schema({
  name: String,
  price: String,
  location: [String]
});

const Artifact = mongoose.model("Artifact", artifactSchema);

module.exports = Artifact;