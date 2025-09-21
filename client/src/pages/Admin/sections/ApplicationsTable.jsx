// Applications table placeholder; later reuse your existing Admin table logic
import { useState, useEffect } from 'react';
import { ApplicationStorage } from "@/lib/applicationStorage";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function ApplicationsTable() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load applications from localStorage
  const loadApplications = () => {
    setLoading(true);
    const savedApplications = ApplicationStorage.getAll();
    console.log('ApplicationsTable: Loaded applications:', savedApplications);
    setApplications(savedApplications);
    setLoading(false);
  };

  // Listen for new application submissions
  useEffect(() => {
    loadApplications();

    const handleApplicationSubmitted = () => {
      loadApplications();
    };

    window.addEventListener('applicationSubmitted', handleApplicationSubmitted);

    return () => {
      window.removeEventListener('applicationSubmitted', handleApplicationSubmitted);
    };
  }, []);

  // Update application status
  const updateApplicationStatus = (id, newStatus) => {
    console.log(`ApplicationsTable: Updating status for application ${id} to: ${newStatus}`);
    const success = ApplicationStorage.updateStatus(id, newStatus);
    if (success) {
      console.log('ApplicationsTable: Status updated successfully, forcing reload...');
      // Force immediate reload to ensure UI updates
      setTimeout(() => {
        loadApplications();
      }, 100);
    } else {
      console.error('ApplicationsTable: Failed to update status');
    }
  };

  // Delete application
  const deleteApplication = (id) => {
    if (window.confirm('Are you sure you want to delete this application?')) {
      const success = ApplicationStorage.delete(id);
      if (success) {
        loadApplications(); // Reload the applications list
      }
    }
  };

  // Add test applications with different statuses for color testing
  const addTestApplications = () => {
    const testApplications = [
      {
        id: Date.now() - 1000,
        timestamp: new Date(Date.now() - 86400000).toISOString(),
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '+1-555-0123',
        position: 'Senior Software Engineer',
        experience: '5-8 years',
        resume: null,
        coverLetter: 'I am excited to apply for the Senior Software Engineer position...',
        linkedIn: 'https://linkedin.com/in/johndoe',
        portfolio: 'https://johndoe.dev',
        availability: '2025-10-01',
        status: 'Submitted'
      },
      {
        id: Date.now() - 2000,
        timestamp: new Date(Date.now() - 172800000).toISOString(),
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        phone: '+1-555-0456',
        position: 'UX Designer',
        experience: '3-5 years',
        resume: null,
        coverLetter: 'As a passionate UX Designer with 4 years of experience...',
        linkedIn: 'https://linkedin.com/in/janesmith',
        portfolio: 'https://janesmith.design',
        availability: '2025-09-15',
        status: 'Under Review'
      },
      {
        id: Date.now() - 3000,
        timestamp: new Date(Date.now() - 259200000).toISOString(),
        firstName: 'Mike',
        lastName: 'Johnson',
        email: 'mike.johnson@example.com',
        phone: '+1-555-0789',
        position: 'Data Scientist',
        experience: '8+ years',
        resume: null,
        coverLetter: 'I am a highly experienced Data Scientist...',
        linkedIn: 'https://linkedin.com/in/mikejohnson',
        portfolio: 'https://mikejohnson.ai',
        availability: '2025-11-01',
        status: 'Interviewing'
      },
      {
        id: Date.now() - 4000,
        timestamp: new Date(Date.now() - 345600000).toISOString(),
        firstName: 'Sarah',
        lastName: 'Wilson',
        email: 'sarah.wilson@example.com',
        phone: '+1-555-0321',
        position: 'Product Manager',
        experience: '5-8 years',
        resume: null,
        coverLetter: 'I am a strategic Product Manager...',
        linkedIn: 'https://linkedin.com/in/sarahwilson',
        portfolio: 'https://sarahwilson.pm',
        availability: '2025-09-01',
        status: 'Accepted'
      },
      {
        id: Date.now() - 5000,
        timestamp: new Date(Date.now() - 432000000).toISOString(),
        firstName: 'David',
        lastName: 'Brown',
        email: 'david.brown@example.com',
        phone: '+1-555-0654',
        position: 'Backend Engineer',
        experience: '3-5 years',
        resume: null,
        coverLetter: 'I am a skilled Backend Engineer...',
        linkedIn: 'https://linkedin.com/in/davidbrown',
        portfolio: 'https://davidbrown.dev',
        availability: '2025-12-01',
        status: 'Rejected'
      }
    ];

    console.log('ApplicationsTable: Adding test applications with different statuses');
    ApplicationStorage.saveAll(testApplications);
    loadApplications();
  };

  // Get status badge color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Submitted': return 'bg-blue-900 text-blue-300';
      case 'Under Review': return 'bg-yellow-900 text-yellow-300';
      case 'Interviewing': return 'bg-purple-900 text-purple-300';
      case 'Accepted': return 'bg-green-900 text-green-300';
      case 'Rejected': return 'bg-red-900 text-red-300';
      default: return 'bg-gray-900 text-gray-300';
    }
  };

  // Get status button color for dropdown
  const getStatusButtonColor = (status) => {
    switch (status) {
      case 'Submitted': return 'bg-blue-600 hover:bg-blue-700';
      case 'Under Review': return 'bg-yellow-600 hover:bg-yellow-700';
      case 'Interviewing': return 'bg-purple-600 hover:bg-purple-700';
      case 'Accepted': return 'bg-green-600 hover:bg-green-700';
      case 'Rejected': return 'bg-red-600 hover:bg-red-700';
      default: return 'bg-gray-600 hover:bg-gray-700';
    }
  };

  if (loading) {
    return (
      <div className="rounded-2xl border border-gray-700 p-8 text-center">
        <div className="text-gray-400">Loading applications...</div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-700 overflow-hidden">
      <div className="p-4 border-b border-gray-700 bg-gray-800/50">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">
            Applications ({applications.length})
          </h3>
          <div className="flex gap-2">
            <button
              onClick={addTestApplications}
              className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors"
            >
              Add Test Applications
            </button>
            <button
              onClick={() => {
                ApplicationStorage.clearAll();
                loadApplications();
              }}
              className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>

      {applications.length === 0 ? (
        <div className="p-8 text-center">
          <div className="text-gray-400 mb-2">No applications submitted yet</div>
          <div className="text-sm text-gray-500 mb-4">
            Applications will appear here when candidates submit them
          </div>
          <div className="text-xs text-gray-600">
            💡 Click "Add Test Applications" to see status color examples
          </div>
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Experience</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Links</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((app) => (
              <TableRow key={app.id}>
                <TableCell className="font-medium">
                  {app.firstName} {app.lastName}
                </TableCell>
                <TableCell className="text-gray-300">{app.email}</TableCell>
                <TableCell>{app.position}</TableCell>
                <TableCell>{app.experience}</TableCell>
                <TableCell>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(app.status)}`}>
                    {app.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="space-y-2 text-sm">
                    {app.linkedIn && (
                      <div>
                        <span className="text-gray-400">LinkedIn: </span>
                        <a
                          href={app.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 underline"
                        >
                          View Profile
                        </a>
                      </div>
                    )}
                    {app.portfolio && (
                      <div>
                        <span className="text-gray-400">Portfolio: </span>
                        <a
                          href={app.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 underline"
                        >
                          View Portfolio
                        </a>
                      </div>
                    )}
                    {app.phone && (
                      <div>
                        <span className="text-gray-400">Phone: </span>
                        <span className="text-gray-300">{app.phone}</span>
                      </div>
                    )}
                    {app.coverLetter && (
                      <div>
                        <span className="text-gray-400">Cover Letter: </span>
                        <details className="mt-1">
                          <summary className="text-blue-400 cursor-pointer hover:text-blue-300">
                            View Cover Letter
                          </summary>
                          <div className="mt-2 p-2 bg-gray-800 rounded text-xs text-gray-300 max-h-20 overflow-y-auto">
                            {app.coverLetter}
                          </div>
                        </details>
                      </div>
                    )}
                    {app.availability && (
                      <div>
                        <span className="text-gray-400">Available: </span>
                        <span className="text-gray-300">{app.availability}</span>
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <select
                      value={app.status}
                      onChange={(e) => updateApplicationStatus(app.id, e.target.value)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium border-none focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20 text-white ${getStatusButtonColor(app.status)}`}
                    >
                      <option value="Submitted" className="bg-blue-600 text-white hover:bg-blue-700">Submitted</option>
                      <option value="Under Review" className="bg-yellow-600 text-black hover:bg-yellow-700">Under Review</option>
                      <option value="Interviewing" className="bg-purple-600 text-white hover:bg-purple-700">Interviewing</option>
                      <option value="Accepted" className="bg-green-600 text-white hover:bg-green-700">Accepted</option>
                      <option value="Rejected" className="bg-red-600 text-white hover:bg-red-700">Rejected</option>
                    </select>
                    <button
                      onClick={() => deleteApplication(app.id)}
                      className="px-2 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors"
                      title="Delete Application"
                    >
                      🗑️
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
