const mongoose = require("mongoose");


const excerciseSchema = new mongoose.Schema(
    {
      name: {type: String, unique:true},
      description: String,
      imgUrl: String,
      bodyPart: String,
      reps: Number,
      sets: Number,
      order: {type:Number, default: 0},
      userMade: { type: mongoose.Schema.Types.ObjectId }
    },
    {
      timestamps: true,
    }
  );

  module.exports = mongoose.model('Excercise', excerciseSchema);