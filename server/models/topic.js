const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicSchema = new mongoose.Schema({ 
  name:                 { type: String, required: true },
  explanation:          { type: String },
  _trainingExercises:   [{ type: Schema.Types.ObjectId, ref: "Exercise" }], 
  _testExercises:       [{ type: Schema.Types.ObjectId, ref: "Exercise" }], 
});

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;