import { useAuth, useUser, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const RoleSelection = () => {
  const { user } = useUser();

  // Check if user has admin role in their metadata
  const isAdmin = user?.publicMetadata?.role === 'admin';

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome back!</h1>
          <p className="text-slate-300">Choose how you'd like to continue</p>
        </div>

        <div className="space-y-4">
          {/* Admin Access */}
          <Link
            to="/admin2"
            className="w-full block bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 text-center shadow-lg hover:shadow-xl"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">👨‍💼</span>
              <div className="text-left">
                <div className="font-bold text-lg">Admin Dashboard</div>
                <div className="text-sm opacity-90">Manage applications & candidates</div>
              </div>
            </div>
          </Link>

          {/* Candidate Access */}
          <Link
            to="/candidate/applications"
            className="w-full block bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 text-center shadow-lg hover:shadow-xl"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">👤</span>
              <div className="text-left">
                <div className="font-bold text-lg">Candidate Portal</div>
                <div className="text-sm opacity-90">Apply for jobs & track applications</div>
              </div>
            </div>
          </Link>
        </div>

        {/* User Profile Section */}
        <div className="mt-6 pt-6 border-t border-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10"
                  }
                }}
              />
              <div>
                <div className="font-medium">{user?.firstName} {user?.lastName}</div>
                <div className="text-sm text-slate-400">{user?.primaryEmailAddress?.emailAddress}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
