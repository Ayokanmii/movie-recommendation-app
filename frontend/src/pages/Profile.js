import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const [user, setUser] = useState({
    name: "Olatunji Ayokanmi",
    email: "olatunjiayokanmii@gmail.com",
    joined: "July 2025",
    bio: "Movie enthusiast exploring the best films with WatchWise!",
    favoriteGenres: ["Sci-Fi", "Animation", "Thriller"],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      setUser({ ...editedUser }); // Save changes
      // Add logic to update user data in backend (e.g., API call)
      alert('Profile updated successfully!');
    }
  };

  const handleInputChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleGenreChange = (genre) => {
    const updatedGenres = editedUser.favoriteGenres.includes(genre)
      ? editedUser.favoriteGenres.filter((g) => g !== genre)
      : [...editedUser.favoriteGenres, genre];
    setEditedUser({ ...editedUser, favoriteGenres: updatedGenres });
  };

  return (
    <div className="profile-container">
      <img src="/logo.png" alt="WatchWise Logo" className="logo" />
      <h2>👤 Profile</h2>
      <div className="profile-card">
        {isEditing ? (
          <>
            <div className="profile-item">
              <strong>Name:</strong>
              <input
                type="text"
                name="name"
                value={editedUser.name}
                onChange={handleInputChange}
                className="profile-input"
              />
            </div>
            <div className="profile-item">
              <strong>Email:</strong>
              <input
                type="email"
                name="email"
                value={editedUser.email}
                onChange={handleInputChange}
                className="profile-input"
              />
            </div>
            <div className="profile-item">
              <strong>Bio:</strong>
              <textarea
                name="bio"
                value={editedUser.bio}
                onChange={handleInputChange}
                className="profile-textarea"
              />
            </div>
            <div className="profile-item">
              <strong>Favorite Genres:</strong>
              <div className="genre-options">
                {["Sci-Fi", "Animation", "Thriller", "Action", "Drama"].map((genre) => (
                  <label key={genre} className="genre-label">
                    <input
                      type="checkbox"
                      checked={editedUser.favoriteGenres.includes(genre)}
                      onChange={() => handleGenreChange(genre)}
                    />
                    {genre}
                  </label>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="profile-item">
              <strong>Name:</strong> {user.name}
            </div>
            <div className="profile-item">
              <strong>Email:</strong> {user.email}
            </div>
            <div className="profile-item">
              <strong>Joined:</strong> {user.joined}
            </div>
            <div className="profile-item">
              <strong>Bio:</strong> {user.bio}
            </div>
            <div className="profile-item">
              <strong>Favorite Genres:</strong> {user.favoriteGenres.join(", ")}
            </div>
          </>
        )}
        <div className="profile-actions">
          <button className="action-btn" onClick={handleEditToggle}>
            {isEditing ? 'Save Profile' : 'Edit Profile'}
          </button>
          <Link to="/settings" className="settings-link">
            Go to Settings
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;