const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const scoreSchema = new Schema(
  {
    username: { type: String, required: true },
    totalScore: { type: Number, required: true },
    course: { type: String, required: true },
    fir: { type: Number, required: true },
    gir: { type: Number, required: true },
    putts: { type: Number, required: true },
    pen: { type: Number, required: true },
    tees: { type: String, required: true },
    holeData: { type: Object, required: true },
    strokesGained: { type: Object, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;
