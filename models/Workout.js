const mongoose = require("mongoose");

const excerciseSchema = new mongoose.Schema({
    name: String,
    decription: String,
    bodypart: String,
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