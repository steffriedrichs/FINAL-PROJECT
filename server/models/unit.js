const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({ 
  name: { type: String, required: true },
  _topics: [{ type: Schema.Types.ObjectId, ref: "Topic" }], 
});

const Unit = mongoose.model('Unit', moduleSchema);

module.exports = Unit;