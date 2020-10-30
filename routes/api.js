const router = require("express").Router();
const db = require("../models");

router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
  .then((data) => {
    console.log(data);
    res.json(data);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});