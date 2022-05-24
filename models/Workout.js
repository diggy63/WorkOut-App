const mongoose = require("mongoose");


const workoutSchema = new mongoose.Schema(
    {  
      workoutName: String,
      description: String,
      excercises: { type: mongoose.Schema.Types.ObjectId, ref: 'Excercise'},
      userCreated: { type: mongoose.Schema.Types.ObjectId },
      userCompleted: { type: mongoose.Schema.Types.ObjectId }
      
    },
    {
      timestamps: true,
    }
  );

  module.exports = mongoose.model('Workout', workoutSchema);