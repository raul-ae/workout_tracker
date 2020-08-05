var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true
            },
        
            name: {
                type: String,
                trim: true
            },
        
            duration: {
                type: Number
            },
        
            weight: {
                type: Number,
            },
        
            reps: {
                type: Number,
            },
        
            sets: {
                type: Number,
            },
        
            distance: {
                type: Number,
            }
        }
    ]
});

var Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;