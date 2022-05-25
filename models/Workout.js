const mongoose = require("mongoose");

const excerciseSchema = new mongoose.Schema({
    name: String,
    description: String,
    bodyPart: String,
    order: {type:Number, default: 0},
    reps: {type:Number, default: 0},
    sets: {type:Number, default: 0},
    weight: {type:Number, default:0},
} , {
    timestamp: true
})


const workoutSchema = new mongoose.Schema(
    {  
      workoutName: String,
      description: String,
      excercises: [excerciseSchema],
      userCreated: { type: mongoose.Schema.Types.ObjectId },
      userCompleted: { type: mongoose.Schema.Types.ObjectId }
      
    },
    {
      timestamps: true,
    }
  );

  module.exports = mongoose.model('Workout', workoutSchema);