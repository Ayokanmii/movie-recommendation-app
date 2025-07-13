import React, { useState } from 'react';
import './Auth.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Later, you'll connect this with backend email logic
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>🔒 Forgot Password</h2>
        {!submitted ? (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Send Reset Link</button>
          </>
        ) : (
          <p>A password reset link has been sent to your email (demo).</p>
        )}
      </form>
    </div>
  );
}

export default ForgotPassword;
