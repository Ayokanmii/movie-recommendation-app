import React, { useState } from 'react';
import axios from 'axios';
import './AIRecommendations.css';

function AIRecommendations() {
  const [input, setInput] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);

  const getRecommendation = async () => {
    try {
      setLoading(true);
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/ai/recommend`, { input });
      setRecommendation(res.data.recommendation);
    } catch (error) {
      setRecommendation("Sorry, something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-page">
      <h2>🎯 AI Movie Recommender</h2>
      <p>Enter a movie or your mood, and let our AI suggest something for you!</p>

      <input
        type="text"
        placeholder="e.g. I want a romantic comedy..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={getRecommendation} disabled={loading}>
        {loading ? "Thinking..." : "Get Recommendation"}
      </button>

      {recommendation && (
        <div className="result">
          <h3>AI Suggests:</h3>
          <p>{recommendation}</p>
        </div>
      )}
    </div>
  );
}

export default AIRecommendations;
