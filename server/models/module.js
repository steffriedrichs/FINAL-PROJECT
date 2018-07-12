const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moduleSchema  = new mongoose.Schema({ 
  name: { type: String, required: true },
  _units: [{ type: Schema.Types.ObjectId, ref: "Unit" }], 
});

const Module = mongoose.model('Module', moduleSchema );

module.exports = Module;