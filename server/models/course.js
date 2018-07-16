const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema  = new mongoose.Schema({ 
  name: { type: String, required: true },
  _units: [{ type: Schema.Types.ObjectId, ref: "Unit" }], 
});

const Course = mongoose.model('Course', courseSchema );

module.exports = Course;