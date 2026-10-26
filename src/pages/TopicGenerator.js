import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TopicGenerator.css';

const TopicGenerator = () => {
  const [niche, setNiche] = useState('');
  const [contentType, setContentType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [audience, setAudience] = useState('');
  const [keywords, setKeywords] = useState('');
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTopics([]);

    setTimeout(() => {
      const demoTopics = [
        {
          title: `Top 10 ${niche || 'Marketing'} Tools for ${audience || 'Creators'} in 2025`,
          description: `Explore essential ${niche} tools for boosting performance across ${contentType || 'social media'} content.`,
          tags: ['#tools', '#growth', '#2025'],
          difficulty: 'Easy'
        },
        {
          title: `Why ${selectedCategory || 'educational'} Content Wins in ${niche}`,
          description: `Discover how the right content category can supercharge engagement in your ${niche || 'industry'} niche.`,
          tags: ['#contentstrategy', '#niche', '#marketing'],
          difficulty: 'Medium'
        },
        {
          title: `How to Engage ${audience || 'Your Audience'} Using Creative Hooks`,
          description: `Learn simple tricks and examples to hook viewers and keep them watching until the end.`,
          tags: ['#hooks', '#engagement', '#reels'],
          difficulty: 'Advanced'
        }
      ];

      setTopics(demoTopics);
      setLoading(false);
    }, 5000); // 5-second delay
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleCopyAll = () => {
    const allTitles = topics.map((t) => t.title).join('\n');
    navigator.clipboard.writeText(allTitles);
  };

  const handleCopyOne = (title) => {
    navigator.clipboard.writeText(title);
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
            <li><Link to="/topics" className="active">Topics</Link></li>
            <li><Link to="/strategy">Strategy</Link></li>
          </ul>
        </div>
      </nav>

      <div className="tool-page">
        <div className="tool-header">
          <h1>💡 Topic Generator</h1>
          <p>Discover engaging content topics and ideas for your next project</p>
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="niche">Your Niche or Industry</label>
              <input
                type="text"
                id="niche"
                className="form-input"
                placeholder="e.g., Digital Marketing, Fitness..."
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contentType">Content Type</label>
              <select
                id="contentType"
                className="form-input"
                value={contentType}
                onChange={(e) => setContentType(e.target.value)}
                required
              >
                <option value="">Select Content Type</option>
                <option value="blog-post">Blog Post</option>
                <option value="video">Video Content</option>
                <option value="social-media">Social Media Post</option>
                <option value="podcast">Podcast Episode</option>
                <option value="newsletter">Newsletter</option>
                <option value="course">Online Course</option>
                <option value="infographic">Infographic</option>
                <option value="webinar">Webinar</option>
              </select>
            </div>

            <div className="form-group">
              <label>Content Category</label>
              <div className="category-select">
                {['educational','entertainment','how-to','trending','seasonal','controversial','inspirational','news'].map((cat) => (
                  <div
                    key={cat}
                    className={`category-option ${selectedCategory === cat ? 'selected' : ''}`}
                    onClick={() => handleCategoryClick(cat)}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </div>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="audience">Target Audience</label>
              <input
                type="text"
                id="audience"
                className="form-input"
                placeholder="e.g., beginners, professionals..."
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="keywords">Keywords (Optional)</label>
              <input
                type="text"
                id="keywords"
                className="form-input"
                placeholder="Enter keywords separated by commas"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
              />
            </div>

            <button type="submit" className="generate-btn" disabled={loading}>
              {loading ? "Generating..." : "Generate Topics 🚀"}
            </button>
          </form>

          {loading && (
            <div className="loading">
              <div className="loading-spinner"></div>
              <p>Generating creative topics for you...</p>
            </div>
          )}

          {topics.length > 0 && (
            <div className="results-container show">
              <div className="results-header">
                <h3>Generated Topics</h3>
                <button className="copy-all-btn" onClick={handleCopyAll}>Copy All Titles</button>
              </div>
              <div className="topic-grid">
                {topics.map((topic, i) => (
                  <div key={i} className="topic-item">
                    <div className="topic-title">
                      {topic.title}
                      <button className="copy-btn" onClick={() => handleCopyOne(topic.title)}>📋</button>
                    </div>
                    <div className="topic-description">{topic.description}</div>
                    <div className="topic-tags">
                      {topic.tags?.map((tag, j) => (
                        <div key={j} className="topic-tag">{tag}</div>
                      ))}
                    </div>
                    <div className="topic-actions">
                      <div className="difficulty-badge">{topic.difficulty || 'Medium'}</div>
                    </div>
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

export default TopicGenerator;
