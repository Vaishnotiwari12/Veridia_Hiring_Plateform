// Candidate Dashboard page composed from sections
// For now uses static placeholders; integrate with your existing data later
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CandidateLayout from "@/layouts/CandidateLayout";
import StatusCards from "./sections/StatusCards";
import ProfileProgress from "./sections/ProfileProgress";
import RecentApplications from "./sections/RecentApplications";
import ApplicationForm from "./sections/ApplicationForm";

export default function CandidateDashboardPage() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const location = useLocation();

  const handleFormSubmit = (formData) => {
    console.log('Application submitted:', formData);
    setShowApplicationForm(false);
  };

  const handleFormCancel = () => {
    setShowApplicationForm(false);
  };

  // Determine active section based on current route
  const getActiveSection = () => {
    const path = location.pathname;
    if (path.includes('/profile')) return 'profile';
    if (path.includes('/applications')) return 'applications';
    if (path.includes('/notifications')) return 'notifications';
    if (path.includes('/settings')) return 'settings';
    return 'profile';
  };

  const activeSection = getActiveSection();
  const sectionTitle = activeSection.charAt(0).toUpperCase() + activeSection.slice(1);

  return (
    <CandidateLayout title={`${sectionTitle} - Candidate Dashboard`} activeSection={activeSection}>
      <div className="space-y-6">
        {!showApplicationForm ? (
          <>
            {activeSection === 'applications' && (
              <>
                <StatusCards />
                <ProfileProgress percent={70} />
                <RecentApplications onApplyClick={() => setShowApplicationForm(true)} />

                {/* Apply Now Section */}
                <div className="bg-gray-800 border border-gray-700 rounded-2xl p-3 md:p-6 text-center">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3">Ready to Apply?</h3>
                  <p className="text-gray-400 mb-4 text-sm md:text-base">
                    Start your journey with Veridia by submitting your application
                  </p>
                  <button
                    onClick={() => setShowApplicationForm(true)}
                    className="px-4 py-2 md:px-6 md:py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors font-semibold text-sm md:text-base w-full sm:w-auto"
                  >
                    Start Application Form
                  </button>
                </div>
              </>
            )}

            {activeSection === 'profile' && (
              <div className="bg-gray-800 border border-gray-700 rounded-2xl p-3 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Profile Section</h3>
                <p className="text-gray-400 text-sm md:text-base">Profile management features coming soon...</p>
              </div>
            )}

            {activeSection === 'notifications' && (
              <div className="bg-gray-800 border border-gray-700 rounded-2xl p-3 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Notifications</h3>
                <p className="text-gray-400 text-sm md:text-base">No new notifications at this time.</p>
              </div>
            )}

            {activeSection === 'settings' && (
              <div className="bg-gray-800 border border-gray-700 rounded-2xl p-3 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Settings</h3>
                <p className="text-gray-400 text-sm md:text-base">Account settings and preferences coming soon...</p>
              </div>
            )}
          </>
        ) : (
          <ApplicationForm
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
          />
        )}
      </div>
    </CandidateLayout>
  );
}
