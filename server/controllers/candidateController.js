const Candidate = require('../models/candidateModel');

// @desc   Create a new candidate for the logged-in user
const createCandidate = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: 'Please provide name, email, and phone' });
    }

    const candidate = await Candidate.create({
      userId: req.auth.userId,
      name,
      email,
      phone,
    });

    res.status(201).json(candidate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get all candidates for the logged-in user
const getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find({ userId: req.auth.userId });
    res.status(200).json(candidates);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get ALL candidates (Admin Only)
const getAllCandidatesAdmin = async (req, res) => {
  try {
    const candidates = await Candidate.find({});
    res.status(200).json(candidates);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a candidate (Admin Only)
const deleteCandidate = async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id);
    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }
    await candidate.deleteOne();
    res.status(200).json({ id: req.params.id, message: 'Candidate removed' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update a candidate's status (Admin Only)
const updateCandidateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const candidate = await Candidate.findById(req.params.id);

    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    candidate.status = status || candidate.status;
    const updatedCandidate = await candidate.save();
    res.status(200).json(updatedCandidate);
  } catch (error) {
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