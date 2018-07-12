const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unitSchema = new mongoose.Schema({ 
  name: { type: String, required: true },
  _topics: [{ type: Schema.Types.ObjectId, ref: "Topic" }], 
});

const Unit = mongoose.model('Unit', unitSchema);

module.exports = Unit;