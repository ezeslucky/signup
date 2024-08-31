const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  qualifications: { type: String, required: true },
  jobPreferences: { type: String, required: true },
  resume: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
