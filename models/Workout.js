const mongoose = require("mongoose");


const workoutSchema = new mongoose.Schema(
    {
      description: String,
      excercises: { type: mongoose.Schema.Types.ObjectId, ref: 'Excercise'},
      
    },
    {
      timestamps: true,
    }
  );

  module.exports = mongoose.model('Excercise', excerciseSchema);