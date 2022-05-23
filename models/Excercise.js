const mongoose = require("mongoose");


const excerciseSchema = new mongoose.Schema(
    {
      description: String,
      imgUrl: String,
      reps: Number,
      sets: Number,
      userMade: { type: mongoose.Schema.Types.ObjectId }
    },
    {
      timestamps: true,
    }
  );

  module.exports = mongoose.model('Excercise', excerciseSchema);