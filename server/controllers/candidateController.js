const Candidate = require('../models/candidateModel');

// @desc   Create a new candidate for the logged-in user
// This endpoint handles application submissions from the frontend
// It validates required fields and creates a new candidate record in MongoDB
const createCandidate = async (req, res) => {
  try {
    // Destructure all fields from request body - comprehensive application data
    const {
      firstName,
      lastName,
      name,
      email,
      phone,
      position,
      experience,
      coverLetter,
      linkedIn,
      portfolio,
      availability,
      resumeUrl,
      resumeFileName,
      resumeFileSize,
      resumeFileType
    } = req.body;

    // Validate required fields - ensures data integrity
    // These are the minimum fields needed for a valid application
    if (!firstName || !lastName || !email || !phone || !position || !experience) {
      return res.status(400).json({
        message: 'Please provide firstName, lastName, email, phone, position, and experience'
      });
    }

    // Create candidate record in MongoDB with user association
    // req.auth.userId comes from Clerk authentication middleware
    // This associates the application with the authenticated user
    const candidate = await Candidate.create({
      userId: req.auth.userId,        // Links to Clerk user ID
      firstName,                      // Personal information
      lastName,
      name: `${firstName} ${lastName}`, // Computed full name field
      email,
      phone,
      position,                       // Job application details
      experience,
      coverLetter,                    // Optional application materials
      linkedIn,
      portfolio,
      availability,
      resumeUrl,                      // File information (metadata only)
      resumeFileName,
      resumeFileSize,
      resumeFileType,
      status: 'Submitted',            // Default status for new applications
    });

    // Return the created candidate with 201 status (Created)
    res.status(201).json(candidate);
  } catch (error) {
    // Handle database errors or validation errors
    // Return 400 for bad requests, includes the actual error message
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get all candidates for the logged-in user
// Returns only applications submitted by the current authenticated user
// Used in candidate dashboard to show their own applications
const getCandidates = async (req, res) => {
  try {
    // Find candidates where userId matches the authenticated user
    // This ensures users can only see their own applications
    const candidates = await Candidate.find({ userId: req.auth.userId });
    res.status(200).json(candidates);
  } catch (error) {
    // Handle database query errors
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get ALL candidates (Admin Only)
// This endpoint is protected by the isAdmin middleware
// Returns every candidate application in the system for admin review
const getAllCandidatesAdmin = async (req, res) => {
  try {
    // Find all candidates without filtering - admin sees everything
    // Used by admin dashboard to display all applications
    const candidates = await Candidate.find({});
    res.status(200).json(candidates);
  } catch (error) {
    // Handle database query errors
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a candidate (Admin Only)
// Permanently removes a candidate application from the database
// Protected by isAdmin middleware to prevent unauthorized deletions
const deleteCandidate = async (req, res) => {
  try {
    // Find candidate by ID to verify it exists
    const candidate = await Candidate.findById(req.params.id);
    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    // Remove the candidate from database
    await candidate.deleteOne();

    // Return success response with deleted candidate's ID
    res.status(200).json({ id: req.params.id, message: 'Candidate removed' });
  } catch (error) {
    // Handle database errors or invalid ID format
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update a candidate's status (Admin Only)
// Changes application status through the admin dashboard
// Expects { status: "Interviewing" } in request body
const updateCandidateStatus = async (req, res) => {
  try {
    // Extract status from request body
    const { status } = req.body;

    // Find candidate by ID to verify it exists
    const candidate = await Candidate.findById(req.params.id);
    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    // Update status (use provided status or keep existing if none provided)
    // This allows for flexible status updates
    candidate.status = status || candidate.status;

    // Save the updated candidate
    const updatedCandidate = await candidate.save();

    // Return the updated candidate data
    res.status(200).json(updatedCandidate);
  } catch (error) {
    // Handle database errors or invalid ID format
    res.status(400).json({ message: error.message });
  }
};


module.exports = {
  createCandidate,
  getCandidates,
  getAllCandidatesAdmin,
  deleteCandidate,
  updateCandidateStatus,
};