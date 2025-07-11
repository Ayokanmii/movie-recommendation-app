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
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/ai/recommend`,
        {
          mood: input,
          genre: input,
        }
      );
      setRecommendation(res.data.recommendations || "No response found.");
    } catch (error) {
      console.error("❌ AI Error:", error.response?.data || error.message);
      setRecommendation("❌ Sorry, something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-page">
      <div className="ai-box">
        <h2>🎯 AI Movie Recommender</h2>
        <p>Enter a movie, feeling, or genre — and let our AI suggest something perfect for you.</p>

        <input
          type="text"
          placeholder="e.g. kids movie, adventure, sad mood..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={getRecommendation} disabled={loading}>
          {loading ? "Thinking..." : "Get Recommendation"}
        </button>

        {recommendation && (
          <div className="result-box">
            <h3>🎬 AI Suggests:</h3>
            {recommendation.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AIRecommendations;
