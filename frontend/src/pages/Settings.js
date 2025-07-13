import React, { useState } from 'react';
import './Settings.css';

function Settings() {
  const [theme, setTheme] = useState('Light'); // State for theme toggle
  const [notifications, setNotifications] = useState(true); // State for notifications

  const handleThemeToggle = () => {
    setTheme(theme === 'Light' ? 'Dark' : 'Light');
    // Add logic to apply theme (e.g., update CSS variables or localStorage)
  };

  const handleNotificationsToggle = () => {
    setNotifications(!notifications);
    // Add logic to save notification preference (e.g., to backend)
  };

  const handleChangePassword = () => {
    // Add logic for password change (e.g., open modal or redirect)
    alert('Password change functionality coming soon!');
  };

  const handleLogout = () => {
    // Add logout logic (e.g., clear auth token, redirect to login)
    alert('Logged out successfully!');
  };

  return (
    <div className="settings-container">
      <img src="/logo.png" alt="WatchWise Logo" className="logo" />
      <h2>⚙️ Settings</h2>
      <div className="settings-card">
        <div className="setting-item">
          <strong>Theme:</strong> {theme}
          <button className="toggle-btn" onClick={handleThemeToggle}>
            Switch to {theme === 'Light' ? 'Dark' : 'Light'} Theme
          </button>
        </div>
        <div className="setting-item">
          <strong>Notifications:</strong> {notifications ? 'Enabled' : 'Disabled'}
          <button className="toggle-btn" onClick={handleNotificationsToggle}>
            {notifications ? 'Disable' : 'Enable'} Notifications
          </button>
        </div>
        <div className="setting-item">
          <button className="action-btn" onClick={handleChangePassword}>
            Change Password
          </button>
        </div>
        <div className="setting-item">
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;