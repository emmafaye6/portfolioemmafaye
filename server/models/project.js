const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  skills: { type: String },
  image: { type: String },
  liveUrl: { type: String },
  repo: { type: String },
});

module.exports = mongoose.model("Project", projectSchema);
