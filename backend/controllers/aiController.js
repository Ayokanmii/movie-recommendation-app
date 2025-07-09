// controllers/aiController.js
const axios = require("axios");

const getAIRecommendations = async (req, res) => {
  const { mood, genre } = req.body;

  try {
    // Sample mock AI logic – you can replace with OpenAI call
    const recommendations = [
      {
        title: "The Matrix",
        genre: "Sci-Fi",
        description: "A hacker discovers the shocking truth about reality."
      },
      {
        title: "Inside Out",
        genre: "Animation",
        description: "Explore emotions through the mind of a young girl."
      }
    ];

    res.json({ success: true, recommendations });
  } catch (err) {
    console.error("AI Recommender Error:", err.message);
    res.status(500).json({ success: false, message: "AI recommendation failed." });
  }
};

module.exports = { getAIRecommendations };
