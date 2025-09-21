const express = require('express');
const router = express.Router();
const { ClerkExpressRequireAuth, clerkClient } = require('@clerk/clerk-sdk-node');

const {
  createCandidate,
  getCandidates,
  getAllCandidatesAdmin,
  deleteCandidate,
  updateCandidateStatus,
} = require('../controllers/candidateController');

// Middleware to check for admin role
const isAdmin = async (req, res, next) => {
  const claims = req.auth?.sessionClaims || {};
  // Try multiple common locations Clerk may put role information
  const derivedRole =
    claims.role ||
    claims.orgRole ||
    claims.metadata?.role ||
    claims.publicMetadata?.role ||
    claims.metadata?.publicMetadata?.role ||
    req.auth?.orgRole;

  console.log('Auth Debug -> userId:', req.auth?.userId);
  console.log('Auth Debug -> orgId:', req.auth?.orgId, 'orgRole:', req.auth?.orgRole);
  console.log('Auth Debug -> sessionClaims:', claims);
  console.log('Auth Debug -> derivedRole:', derivedRole);

  if (derivedRole === 'admin') {
    return next();
  }

  // If not found in claims, fetch the user from Clerk to check metadata
  try {
    const userId = req.auth?.userId;
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized: Missing userId' });
    }

    const user = await clerkClient.users.getUser(userId);
    const metaRole =
      user?.publicMetadata?.role ||
      user?.privateMetadata?.role ||
      user?.unsafeMetadata?.role;

    console.log('Auth Debug -> user.metadata.public:', user?.publicMetadata);
    console.log('Auth Debug -> user.metadata.private:', user?.privateMetadata);
    console.log('Auth Debug -> user.metadata.unsafe:', user?.unsafeMetadata);
    console.log('Auth Debug -> metaRole:', metaRole);

    if (metaRole === 'admin') {
      return next();
    }
  } catch (err) {
    console.error('Auth Debug -> Error fetching user from Clerk:', err?.message || err);
  }

  return res.status(403).json({ message: 'Forbidden: Requires admin role' });
};
// Protect all routes below with Clerk authentication.
// Every route after this line requires a valid session.
router.use(ClerkExpressRequireAuth());

// --- Admin Route ---
// Get ALL candidates (admin-only). Useful for HR overview.
router.get('/admin/all', isAdmin, getAllCandidatesAdmin);

// --- Regular User Routes ---
// Create a candidate (owned by the logged-in user)
router.post('/', createCandidate);
// Get all candidates created by the logged-in user
router.get('/', getCandidates);

// --- Admin Mutations ---
// Delete a candidate by ID (admin-only). Used by Admin Dashboard delete action.
router.delete('/:id', isAdmin, deleteCandidate);

// Update a candidate's application status by ID (admin-only).
// Expects body: { status: "Interviewing" }
// Example: PUT /api/candidates/64ab.../status
router.put('/:id/status', isAdmin, updateCandidateStatus);

module.exports = router;