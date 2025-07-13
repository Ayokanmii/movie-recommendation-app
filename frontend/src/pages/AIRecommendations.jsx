import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Added for navigation
import axios from 'axios';
import './AIRecommendations.css';

function AIRecommendations() {
  const [input, setInput] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); // Added for user-friendly errors

  const getRecommendation = async () => {
    if (!input.trim()) {
      setError('Please enter a movie, feeling, or genre to get a recommendation.');
      return;
    }
    try {
      setLoading(true);
      setError('');
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/ai/recommend`,
        {
          mood: input,
          genre: input,
        }
      );
      setRecommendation(res.data.recommendations || 'No recommendations found.');
    } catch (error) {
      console.error('❌ AI Error:', error.response?.data || error.message);
      setRecommendation('');
      setError('Sorry, we couldn’t fetch recommendations. Try again!');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading) {
      getRecommendation();
    }
  };

  return (
    <div className="ai-recommendations-container">
      <img src="/logo.png" alt="WatchWise Logo" className="logo" />
      <h2>🎥 Find Your Perfect Movie</h2>
      <p className="intro-text">
        Enter a movie, feeling, or genre, and let our AI suggest something you’ll love!
      </p>

      <div className="input-container">
        <input
          type="text"
          placeholder="e.g., kids movie, adventure, cozy romance..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className={error ? 'input-error' : ''}
          aria-label="Enter mood, movie, or genre for recommendations"
        />
        <button
          onClick={getRecommendation}
          disabled={loading || !input.trim()}
          className="recommend-btn"
        >
          {loading ? (
            <span className="loading-spinner">⏳ Thinking...</span>
          ) : (
            'Get Recommendation'
          )}
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {recommendation && (
        <div className="result-box">
          <h3>🎬 AI Suggests:</h3>
          {recommendation.split('\n').map((line, i) => (
            <p key={i} className="recommendation-line">
              {line}
            </p>
          ))}
          <Link to="/watchlist" className="watchlist-link">
            Add to Watchlist
          </Link>
        </div>
      )}
    </div>
  );
}

export default AIRecommendations;