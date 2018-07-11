const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({ 
  name: { type: String, required: true },
  // what are possible types for question + solution?
  question: { type: String },
  solution: { type: String },
  points: { type: Number, default: 0 },
  // isTest: { type: Boolean, default: false }, //brauche ich das?
});

const Exercise = mongoose.model('Exercise', moduleSchema);

module.exports = Exercise;