const mongoose = require('mongoose');

const candidateSchema = mongoose.Schema(
  {
    // Add this new field
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    // ... rest of the fields are the same
    email: {
      type: String,
      required: [true, 'Please add an email'],
    },
    phone: {
      type: String,
      required: [true, 'Please add a phone number'],
    },
    resumeUrl: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: true,
      default: 'Applied',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Candidate', candidateSchema);