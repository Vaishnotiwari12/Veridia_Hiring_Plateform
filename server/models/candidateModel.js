const mongoose = require('mongoose');

const candidateSchema = mongoose.Schema(
  {
    // Add this new field
    userId: {
      type: String,
      required: true,
    },
    // Personal Information
    firstName: {
      type: String,
      required: [true, 'Please add a first name'],
    },
    lastName: {
      type: String,
      required: [true, 'Please add a last name'],
    },
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email'
      ]
    },
    phone: {
      type: String,
      required: [true, 'Please add a phone number'],
    },

    // Application Details
    position: {
      type: String,
      required: [true, 'Please add a position'],
    },
    experience: {
      type: String,
      required: [true, 'Please add experience level'],
    },
    coverLetter: {
      type: String,
      required: false,
    },
    linkedIn: {
      type: String,
      required: false,
    },
    portfolio: {
      type: String,
      required: false,
    },
    availability: {
      type: String,
      required: false,
    },

    // File Information
    resumeUrl: {
      type: String,
      required: false,
    },
    resumeFileName: {
      type: String,
      required: false,
    },
    resumeFileSize: {
      type: Number,
      required: false,
    },
    resumeFileType: {
      type: String,
      required: false,
    },

    // Status and timestamps
    status: {
      type: String,
      required: true,
      default: 'Submitted',
      enum: ['Submitted', 'Under Review', 'Interviewing', 'Accepted', 'Rejected']
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Candidate', candidateSchema);