// Home.js
import React from "react";
import { Link } from "react-router-dom";
import "./App.css"; // uses styles from App.css

function Home() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">Creaite AI</div>
          <ul className="nav-links">
            <li><a href="/home">Home</a></li>
            <li><a href="/captions">Captions</a></li>
            <li><a href="/hashtags">Hashtags</a></li>
            <li><a href="/scripts">Scripts</a></li>
            <li><a href="/topics" className="active">Topics</a></li>
            <li><a href="/strategy">Strategy</a></li>
          </ul>
        </div>
      </nav>

      <div className="hero">
        <h1>Welcome to Creaite AI</h1>
        <p>Your ultimate AI-powered toolkit for content creation and social media strategy</p>
      </div>

      <div className="features-grid">
        <Link to="/captions" className="feature-card">
          <div className="feature-content">
            <span className="feature-icon">✍️</span>
            <h3>Caption Generator</h3>
            <p>Create engaging captions for your content with just a topic. Perfect for social media posts across all platforms with customizable tone and length.</p>
          </div>
        </Link>

        <a href="#" className="feature-card">
          <div className="feature-content">
            <span className="feature-icon">#️⃣</span>
            <h3>Hashtag Generator</h3>
            <p>Generate trending and relevant hashtags to boost your content's reach and discoverability. Mix popular and niche tags for maximum impact.</p>
          </div>
        </a>

        <a href="#" className="feature-card">
          <div className="feature-content">
            <span className="feature-icon">🎬</span>
            <h3>Script Generator</h3>
            <p>Generate professional scripts for videos, podcasts, presentations, and any type of content with AI assistance tailored to your needs.</p>
          </div>
        </a>

        <a href="#" className="feature-card">
          <div className="feature-content">
            <span className="feature-icon">💡</span>
            <h3>Topic Ideas</h3>
            <p>Never run out of content ideas again. Get fresh, creative topics tailored to your niche, platform, and audience preferences.</p>
          </div>
        </a>

        <a href="#" className="feature-card">
          <div className="feature-content">
            <span className="feature-icon">📊</span>
            <h3>Strategy Planner</h3>
            <p>Upload your Instagram insights and get personalized strategic plans to grow your account, boost engagement, and achieve your goals.</p>
          </div>
        </a>

        <a href="/connect" class="feature-card">
          <div class="feature-content">
            <span class="feature-icon">🤝</span>
            <h3>Connect with Freelancers</h3>
            <p>Collaborate with talented freelancers on campaigns. Let others create content for you and share the rewards as your content goes viral.</p>
          </div>
        </a>

        <Link to="/campaigns" className="feature-card">
          <div className="feature-content">
            <span className="feature-icon">📣</span>
            <h3>Join Campaigns</h3>
            <p>Participate in creator campaigns and collaborate with others to boost content visibility, engagement, and growth together.</p>
          </div>
        </Link>

      </div>

      <div className="cta-section">
        <h2>Ready to Transform Your Content?</h2>
        <p>Join thousands of creators who are already using Creaite AI to elevate their content game</p>
        <Link to="/captions" className="cta-button">Start Creating Now</Link>
      </div>

      <div className="footer">
        <p>&copy; 2025 Creaite AI. Empowering creators worldwide.</p>
        <div className="social-links">
          <a href="#">📧</a>
          <a href="#">🐦</a>
          <a href="#">📱</a>
          <a href="#">💼</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
