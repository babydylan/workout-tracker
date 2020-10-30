const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [{
    type: {
      type: String,
      trim: true,
      required: "Workout type is required"
    },
    name: {
      type: String,
      trim: true,
      required: "Workout name is required"
    },
    duration: {
      type: Number
    },
    distance: {
        type: Number
      }, 
    weight: {
      type: Number
    },
    reps: {
      type: Number
    },
    sets: {
      type: Number
    }
  }],
});

var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;