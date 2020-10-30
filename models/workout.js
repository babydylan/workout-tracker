const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: [{}],
  day: {
    type: Date,
    default: Date.now,
  },
});

var Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;