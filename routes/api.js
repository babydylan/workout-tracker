const router = require("express").Router();
const db = require("../models/workout");

router.post("/api/exercise", (req, res) => {
  db.Workout.create(req.body)
  .then((data) => {
    console.log(data);
    res.json(data);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.update(
    {
      _id: (req.params.id),
    },
    {
      $push: {
       exercises: req.body
      },
      $inc:{
        totalDuration:req.body.duration
      },
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    res.json(err);
  });
});