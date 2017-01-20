var mongoose  = require("mongoose");
mongoose.Promise = global.Promise;

var CandidateSchema = new mongoose.Schema(
  {
    name: String,
    year: Number
  }
);

mongoose.model("Candidate", CandidateSchema);
mongoose.connect("mongodb://localhost/whenpresident");

module.exports = mongoose;
