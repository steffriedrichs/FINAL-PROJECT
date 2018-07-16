const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
  name: {type:String, required: [true, "A name is required"]},
  _courses: [{ type: Schema.Types.ObjectId, ref: "Module" }], 
  score: { type: Number, default: 0 },
  answeredExercises: [{
    _exercise: { type: Schema.Types.ObjectId, ref: "Exercise" },
    answer: { type: Number},
    isCorrect: { type: Boolean, required: true, default: false }
  }],
  email: {type:String}, // Defined with passportLocalMongoose
  hashed: String, // Defined with passportLocalMongoose
  salt: String, // Defined with passportLocalMongoose
});

// Add "email" (instead of "username"), "hash" and "salt" field to store the email (as username), the hashed password and the salt value
// Documentation: https://github.com/saintedlama/passport-local-mongoose
userSchema.plugin(passportLocalMongoose, {
  usernameField: "email"
});

module.exports = mongoose.model('User', userSchema);