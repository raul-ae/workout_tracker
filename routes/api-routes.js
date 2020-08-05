const router = require("express").Router();
// const Transaction = require("../models/transaction.js");

const db = require("../models");


// getLastWorkout() - GET
router.get("/api/workouts", (req, res) => {
    console.log("Hi")
    db.Workout.find({})
        .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

// addExercise() - PUT
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
        req.params.id,
        { $push:  { exercise: req.body}},
        { new: true}
    ).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    })
})

// // createWorkout() - POST
router.post("/api/workouts", ({ body }, res) => {
    console.log("Hi")
    db.Workout.create(body).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

// getWorkoutsInRange() - GET
router.get("/api/workouts/range", (req, res) => {
    console.log("Hi")
    db.Workout.find({})
        .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});




module.exports = router;
