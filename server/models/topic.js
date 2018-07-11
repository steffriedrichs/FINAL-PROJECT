const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({ 
  name:        { type: String, required: true },
  explanation: { type: String },
  _training:   [{ type: Schema.Types.ObjectId, ref: "Exercise" }], 
  _test:       [{ type: Schema.Types.ObjectId, ref: "Exercise" }], 
});

const Topic = mongoose.model('Topic', moduleSchema);

module.exports = Topic;