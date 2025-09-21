// Centralized route map
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import CandidateDashboardPage from '@/pages/Candidate/Dashboard';
import AdminDashboardPage from '@/pages/Admin/Dashboard';
import { useEffect } from 'react';
import { useAuth, useUser } from '@clerk/clerk-react';
import LandingPage from '@/pages/Home/LandingPage';
import RoleSelection from '@/components/RoleSelection';

// Simple AdminRoute guard: checks Clerk user's publicMetadata.role === 'admin'
function AdminRoute({ children }) {
  const { isSignedIn } = useAuth();
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const role = user?.publicMetadata?.role;
    if (isLoaded && isSignedIn && role !== 'admin') {
      // Show popup message and redirect to home
      alert('Hey! You are not an admin. Please contact your administrator for access.');
      navigate('/home');
    }
  }, [isLoaded, isSignedIn, user, navigate]);

  if (!isLoaded) return null;
  const role = user?.publicMetadata?.role;
  return role === 'admin' ? children : null;
}

// Role-based route component
function RoleBasedRoute({ children }) {
  const { isSignedIn } = useAuth();
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      const role = user?.publicMetadata?.role;

      if (role === 'admin') {
        // If user is admin, go to home page where they can access admin features
        navigate('/home');
      } else {
        // If user is regular user, go to home
        navigate('/home');
      }
    }
  }, [isLoaded, isSignedIn, user, navigate]);

  if (!isLoaded) return null;
  return children;
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* Default redirect to /home */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      {/* /home uses LandingPage */}
      <Route path="/home" element={<LandingPage />} />
      {/* Role selection for authenticated users */}
      <Route path="/role-selection" element={
        <RoleBasedRoute>
          <RoleSelection />
        </RoleBasedRoute>
      } />
      <Route path="/candidate" element={<CandidateDashboardPage />} />
      <Route path="/candidate/profile" element={<CandidateDashboardPage />} />
      <Route path="/candidate/applications" element={<CandidateDashboardPage />} />
      <Route path="/candidate/notifications" element={<CandidateDashboardPage />} />
      <Route path="/candidate/settings" element={<CandidateDashboardPage />} />
      <Route path="/candidate2" element={<CandidateDashboardPage />} />
      <Route path="/admin2" element={<AdminRoute><AdminDashboardPage /></AdminRoute>} />
    </Routes>
  );
}
