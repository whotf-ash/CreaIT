import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./StrategyGenerator.css";

const StrategyGenerator = () => {
  const [formData, setFormData] = useState({
    objective: "",
    industry: "",
    timeframe: "",
    strategyType: "",
    budget: "",
    resources: ""
  });

  const [generatedStrategies, setGeneratedStrategies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleCategoryClick = (category) => {
    setFormData((prev) => ({ ...prev, strategyType: category }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setGeneratedStrategies([]);

    setTimeout(() => {
      const demo = [
        {
          title: "Boost Organic Growth via SEO & Blogs",
          text: `Target keywords aligned with "${formData.industry}" and publish weekly blog posts to drive traffic organically. Use Google Search Console for progress monitoring.`
        },
        {
          title: "Launch a Niche Influencer Campaign",
          text: `Partner with 5 micro-influencers in your ${formData.industry} niche to promote your product on Instagram and TikTok. Budget wisely across 3 months.`
        },
        {
          title: "Email Drip for Lead Nurturing",
          text: `Use a 5-step email sequence tailored for ${formData.objective} with targeted CTAs. Leverage your current ${formData.resources || 'email tools'} to personalize delivery.`
        },
      ];
      setGeneratedStrategies(demo);
      setLoading(false);
    }, 5000); // Simulate 5-second delay
  };

  const copyAll = () => {
    const allText = generatedStrategies.map((s) => `${s.title}\n${s.text}`).join("\n\n");
    navigator.clipboard.writeText(allText);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">Creaite AI</div>
          <ul className="nav-links">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/captions">Captions</Link></li>
            <li><Link to="/hashtags">Hashtags</Link></li>
            <li><Link to="/scripts">Scripts</Link></li>
            <li><Link to="/topics">Topics</Link></li>
            <li><Link to="/strategy" className="active">Strategy</Link></li>
          </ul>
        </div>
      </nav>

      <div className="tool-page">
        <div className="tool-header">
          <h1>🎯 Strategy Generator</h1>
          <p>Create comprehensive strategies for your business goals and objectives</p>
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="objective">Main Objective</label>
              <textarea
                id="objective"
                className="form-input"
                placeholder="Describe your main goal or objective..."
                value={formData.objective}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="industry">Industry/Sector</label>
              <input
                type="text"
                id="industry"
                className="form-input"
                placeholder="e.g., E-commerce, SaaS, Healthcare..."
                value={formData.industry}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="timeframe">Timeframe</label>
              <select
                id="timeframe"
                className="form-input"
                value={formData.timeframe}
                onChange={handleChange}
                required
              >
                <option value="">Select Timeframe</option>
                <option value="1-month">1 Month</option>
                <option value="3-months">3 Months</option>
                <option value="6-months">6 Months</option>
                <option value="1-year">1 Year</option>
                <option value="2-years">2+ Years</option>
              </select>
            </div>

            <div className="form-group">
              <label>Strategy Type</label>
              <div className="category-select">
                {["marketing", "growth", "product", "sales", "content", "social", "seo", "competitive"].map((type) => (
                  <div
                    key={type}
                    className={`category-option ${formData.strategyType === type ? "selected" : ""}`}
                    onClick={() => handleCategoryClick(type)}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </div>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="budget">Budget Range</label>
              <select
                id="budget"
                className="form-input"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">Select Budget Range</option>
                <option value="minimal">Minimal ($0-1K)</option>
                <option value="small">Small ($1K-5K)</option>
                <option value="medium">Medium ($5K-25K)</option>
                <option value="large">Large ($25K-100K)</option>
                <option value="enterprise">Enterprise ($100K+)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="resources">Available Resources</label>
              <input
                type="text"
                id="resources"
                className="form-input"
                placeholder="e.g., 3-person team, email platform..."
                value={formData.resources}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="generate-btn" id="generateBtn">
              {loading ? "Crafting..." : "📈 Generate Strategy"}
            </button>
          </form>

          {loading && (
            <div className="loading">
              <div className="loading-spinner"></div>
              <p>Crafting your strategic roadmap...</p>
            </div>
          )}

          {generatedStrategies.length > 0 && (
            <div className="results-container show">
              <div className="results-header">
                <h3>Generated Strategies</h3>
                <button className="copy-all-btn" onClick={copyAll}>Copy All Strategies</button>
              </div>
              <div className="strategy-grid">
                {generatedStrategies.map((strategy, idx) => (
                  <div key={idx} className="strategy-item">
                    <div className="strategy-title">{strategy.title}</div>
                    <div className="strategy-description">{strategy.text}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StrategyGenerator;
