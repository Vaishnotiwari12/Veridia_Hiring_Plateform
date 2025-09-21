// Applications table - fetches from backend API
import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function ApplicationsTable() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load applications from backend API
  const loadApplications = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/candidates/admin/all`);

      if (!response.ok) {
        throw new Error(`Failed to fetch applications: ${response.status}`);
      }

      const data = await response.json();
      console.log('ApplicationsTable: Loaded applications from API:', data);
      setApplications(data);
    } catch (err) {
      console.error('ApplicationsTable: Error loading applications:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Load applications on component mount
  useEffect(() => {
    loadApplications();
  }, []);

  // Update application status
  const updateApplicationStatus = async (id, newStatus) => {
    try {
      console.log(`ApplicationsTable: Updating status for application ${id} to: ${newStatus}`);

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/candidates/${id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error(`Failed to update status: ${response.status}`);
      }

      const updatedApplication = await response.json();
      console.log('ApplicationsTable: Status updated successfully:', updatedApplication);

      // Reload applications to reflect the change
      await loadApplications();
    } catch (err) {
      console.error('ApplicationsTable: Failed to update status:', err);
      alert('Failed to update application status. Please try again.');
    }
  };

  // Delete application
  const deleteApplication = async (id) => {
    if (!window.confirm('Are you sure you want to delete this application?')) {
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/candidates/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Failed to delete application: ${response.status}`);
      }

      console.log('ApplicationsTable: Application deleted successfully');
      // Reload applications to reflect the change
      await loadApplications();
    } catch (err) {
      console.error('ApplicationsTable: Failed to delete application:', err);
      alert('Failed to delete application. Please try again.');
    }
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

  if (error) {
    return (
      <div className="rounded-2xl border border-gray-700 p-8 text-center">
        <div className="text-red-400 mb-4">Error: {error}</div>
        <button
          onClick={loadApplications}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Retry
        </button>
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
              onClick={loadApplications}
              className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors"
            >
              Refresh
            </button>
          </div>
        </div>
      </div>

      {applications.length === 0 ? (
        <div className="p-8 text-center">
          <div className="text-gray-400 mb-2">No applications submitted yet</div>
          <div className="text-sm text-gray-500">
            Applications will appear here when candidates submit them through the frontend
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
              <TableRow key={app._id}>
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
                      onChange={(e) => updateApplicationStatus(app._id, e.target.value)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium border-none focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20 text-white ${getStatusButtonColor(app.status)}`}
                    >
                      <option value="Submitted" className="bg-blue-600 text-white hover:bg-blue-700">Submitted</option>
                      <option value="Under Review" className="bg-yellow-600 text-black hover:bg-yellow-700">Under Review</option>
                      <option value="Interviewing" className="bg-purple-600 text-white hover:bg-purple-700">Interviewing</option>
                      <option value="Accepted" className="bg-green-600 text-white hover:bg-green-700">Accepted</option>
                      <option value="Rejected" className="bg-red-600 text-white hover:bg-red-700">Rejected</option>
                    </select>
                    <button
                      onClick={() => deleteApplication(app._id)}
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
