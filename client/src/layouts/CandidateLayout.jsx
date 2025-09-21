// Layout for candidate-facing pages: sidebar + header + content
import { useState } from 'react';
import Sidebar from "@/components/common/Sidebar";
import Header from "@/components/common/Header";
import { UserButton } from "@clerk/clerk-react";

export default function CandidateLayout({ title = 'Candidate', children, activeSection = 'profile' }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        items={[
          { label: 'Home', to: '/home', active: false, icon: '🏠' },
          { label: 'Profile', to: '/candidate/profile', active: activeSection === 'profile', icon: '👤' },
          { label: 'Applications', to: '/candidate/applications', active: activeSection === 'applications', icon: '📝' },
          { label: 'Notifications', to: '/candidate/notifications', active: activeSection === 'notifications', icon: '🔔' },
          { label: 'Settings', to: '/candidate/settings', active: activeSection === 'settings', icon: '⚙️' },
        ]}
        activeSection={activeSection}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header
          title={title}
          right={<UserButton afterSignOutUrl="/" />}
          onMenuClick={() => setSidebarOpen(true)}
        />
        <main className="flex-1 p-3 md:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
