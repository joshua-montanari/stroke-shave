const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    name: { type: String, required: true },
    //holds holes, yardages per tee
    description: { type: String, required: true },
    holes: { type: Array, required: true },
    par: { type: Number, required: true },
    //holds yardage, slope, rating
    tees: { type: Object, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
