const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
  name: String,
  age: String,
  bio: String,
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Candidate", CandidateSchema);
