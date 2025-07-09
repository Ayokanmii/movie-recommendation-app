import React, { useState } from "react";
import axios from "axios";

function AIRecommendations() {
  const [prompt, setPrompt] = useState("");
  const [recommendations, setRecommendations] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRecommend = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/ai/recommend`
        { prompt }
      );
      setRecommendations(response.data.recommendations);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>🎥 AI Movie Recommender</h2>
      <p>Get smart movie suggestions powered by AI.</p>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="e.g. Recommend 5 comedy movies like The Hangover"
        rows="4"
        style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }}
      />
      <button onClick={handleRecommend} disabled={loading}>
        {loading ? "Loading..." : "Get Recommendations"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {recommendations && (
        <div style={{ marginTop: "1rem", whiteSpace: "pre-wrap" }}>
          <strong>📋 Results:</strong>
          <p>{recommendations}</p>
        </div>
      )}
    </div>
  );
}

export default AIRecommendations;
