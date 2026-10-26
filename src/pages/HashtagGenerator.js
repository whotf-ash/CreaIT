import React, { useState } from "react";
import "./HashtagGenerator.css";

function HashtagGenerator() {
  const [content, setContent] = useState("");
  const [platform, setPlatform] = useState("");
  const [count, setCount] = useState("");
  const [niche, setNiche] = useState("");
  const [target, setTarget] = useState("");
  const [hashtags, setHashtags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateHashtags = (e) => {
    e.preventDefault();

    if (!content || !platform || !count) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setHashtags([]);
    setCopied(false);

    setTimeout(() => {
      const demoTags = [
        "#contentcreator", "#viral", "#trending", "#explore", "#digitalmarketing",
        "#influencerlife", "#socialstrategy", "#growthhacks", "#brandboost", "#aipowered"
      ];

      const platformTags = {
        instagram: ["#instagood", "#instadaily", "#reels", "#explorepage", "#igers"],
        twitter: ["#TwitterTrends", "#TweetLife", "#SocialBuzz"],
        tiktok: ["#foryou", "#tiktoktrend", "#fyp", "#tiktokviral"],
        linkedin: ["#Networking", "#CareerGrowth", "#LinkedInTips"],
        youtube: ["#Youtuber", "#SubscribeNow", "#ContentHub"]
      };

      const nicheTags = {
        fitness: ["#WorkoutDaily", "#FitnessAddict", "#HealthGoals"],
        food: ["#Foodie", "#RecipeIdeas", "#TastyVibes"],
        travel: ["#Wanderlust", "#TravelDiaries", "#ExploreWorld"],
        fashion: ["#OOTD", "#StyleInspo", "#TrendAlert"],
        education: ["#LearnEveryday", "#StudentTips", "#KnowledgeSharing"],
        photography: ["#BehindTheLens", "#CaptureMoment", "#PhotoGoals"]
      };

      let final = [...demoTags];

      if (platformTags[platform]) final.push(...platformTags[platform]);
      if (nicheTags[niche]) final.push(...nicheTags[niche]);

      const cleaned = final.slice(0, parseInt(count) || 10);
      setHashtags(cleaned);
      setLoading(false);
    }, 5000);
  };

  const copyAll = () => {
    navigator.clipboard.writeText(hashtags.join(" ")).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const copyOne = (tag) => {
    navigator.clipboard.writeText(tag).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">Creaite AI</div>
          <ul className="nav-links">
            <li><a href="/home">Home</a></li>
            <li><a href="/captions">Captions</a></li>
            <li><a href="/hashtags" className="active">Hashtags</a></li>
            <li><a href="/scripts">Scripts</a></li>
            <li><a href="/topics">Topics</a></li>
            <li><a href="/strategy">Strategy</a></li>
          </ul>
        </div>
      </nav>

      <div className="tool-page">
        <div className="tool-header">
          <h1>✨ Hashtag Generator</h1>
          <p>Generate trending and relevant hashtags for your social media content</p>
        </div>

        <form className="form-container" onSubmit={generateHashtags}>
          <div className="form-group">
            <label>Describe your content or topic:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="E.g., Travel photography from Bali sunset beach..."
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Platform:</label>
              <select value={platform} onChange={(e) => setPlatform(e.target.value)} required>
                <option value="">Select Platform</option>
                <option value="instagram">Instagram</option>
                <option value="twitter">Twitter/X</option>
                <option value="tiktok">TikTok</option>
                <option value="linkedin">LinkedIn</option>
                <option value="facebook">Facebook</option>
                <option value="youtube">YouTube</option>
              </select>
            </div>
            <div className="form-group">
              <label>Number of hashtags:</label>
              <select value={count} onChange={(e) => setCount(e.target.value)} required>
                <option value="">Select Count</option>
                <option value="10">10 hashtags</option>
                <option value="20">20 hashtags</option>
                <option value="30">30 hashtags</option>
                <option value="50">50 hashtags</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Niche/Industry:</label>
              <select value={niche} onChange={(e) => setNiche(e.target.value)}>
                <option value="">Optional - Select Niche</option>
                <option value="fitness">Fitness & Health</option>
                <option value="food">Food & Cooking</option>
                <option value="travel">Travel</option>
                <option value="fashion">Fashion & Style</option>
                <option value="beauty">Beauty</option>
                <option value="business">Business</option>
                <option value="technology">Technology</option>
                <option value="photography">Photography</option>
                <option value="art">Art & Design</option>
                <option value="music">Music</option>
                <option value="education">Education</option>
                <option value="lifestyle">Lifestyle</option>
              </select>
            </div>
            <div className="form-group">
              <label>Target Audience:</label>
              <input
                type="text"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                placeholder="E.g., young professionals, fitness enthusiasts..."
              />
            </div>
          </div>

          <button type="submit" className="generate-btn" disabled={loading}>
            {loading ? "Generating..." : "🚀 Generate Hashtags"}
          </button>
        </form>

        <div className={`results-section ${hashtags.length === 0 ? "hidden" : ""}`}>
          <div className="results-header">
            <h2>📍 Generated Hashtags</h2>
            <button className="copy-all-btn" onClick={copyAll}>Copy All</button>
          </div>

          {loading && (
            <div className="loading">
              <div className="spinner"></div>
              <p>Generating trending hashtags for you...</p>
            </div>
          )}

          <div className="hashtag-grid">
            {hashtags.map((tag, index) => (
              <div className="hashtag-item" key={index} onClick={() => copyOne(tag)}>
                <span className="hashtag-text">{tag}</span>
                <svg className="copy-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6 7a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H7a1 1 0 01-1-1V7z" />
                </svg>
              </div>
            ))}
          </div>

          <div className="hashtag-text-area">{hashtags.join(" ")}</div>
        </div>

        {copied && <div className="toast show">Copied to clipboard! ✅</div>}
      </div>
    </div>
  );
}

export default HashtagGenerator;
