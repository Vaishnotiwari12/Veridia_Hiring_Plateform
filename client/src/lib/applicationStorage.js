// Utility functions for application management
export const ApplicationStorage = {
  STORAGE_KEY: 'veridia_applications',

  // Get all applications from localStorage
  getAll: () => {
    try {
      return JSON.parse(localStorage.getItem(ApplicationStorage.STORAGE_KEY) || '[]');
    } catch (error) {
      console.error('Error loading applications:', error);
      return [];
    }
  },

  // Save applications to localStorage
  saveAll: (applications) => {
    try {
      localStorage.setItem(ApplicationStorage.STORAGE_KEY, JSON.stringify(applications));
      return true;
    } catch (error) {
      console.error('Error saving applications:', error);
      return false;
    }
  },

  // Add new application
  add: (application) => {
    const applications = ApplicationStorage.getAll();

    // Handle file information
    let fileInfo = null;
    if (application.resume) {
      fileInfo = {
        name: application.resume.name,
        size: application.resume.size,
        type: application.resume.type,
        lastModified: application.resume.lastModified
      };
    }

    const newApplication = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      status: 'Submitted',
      ...application,
      resume: fileInfo, // Store file info instead of file object
    };

    applications.push(newApplication);
    return ApplicationStorage.saveAll(applications) ? newApplication : null;
  },

  // Update application status
  updateStatus: (id, newStatus) => {
    console.log(`ApplicationStorage: Updating status for ID ${id} to ${newStatus}`);
    const applications = ApplicationStorage.getAll();
    const updatedApplications = applications.map(app =>
      app.id === id ? { ...app, status: newStatus } : app
    );

    console.log('ApplicationStorage: Updated applications:', updatedApplications);
    const saveResult = ApplicationStorage.saveAll(updatedApplications);
    console.log('ApplicationStorage: Save result:', saveResult);
    return saveResult;
  },

  // Delete application
  delete: (id) => {
    const applications = ApplicationStorage.getAll();
    const filteredApplications = applications.filter(app => app.id !== id);
    return ApplicationStorage.saveAll(filteredApplications);
  },

  // Clear all applications
  clearAll: () => {
    localStorage.removeItem(ApplicationStorage.STORAGE_KEY);
  }
};
