import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ScriptPage.css';

function ScriptPage() {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('casual');
  const [platform, setPlatform] = useState('youtube');
  const [length, setLength] = useState('short');
  const [audience, setAudience] = useState('');
  const [script, setScript] = useState('');
  const [loading, setLoading] = useState(false);

  const generateScript = (e) => {
    e.preventDefault();

    if (!topic.trim()) {
      alert("Please enter a topic.");
      return;
    }

    setLoading(true);
    setScript('');

    setTimeout(() => {
      const demoScript = `🎬 Script for: "${topic}"

Platform: ${platform.toUpperCase()}
Tone: ${tone.charAt(0).toUpperCase() + tone.slice(1)}
Length: ${length}, Audience: ${audience || 'General'}

Hey everyone! Welcome back to our channel!

Today, we're diving into "${topic}". This ${tone} walkthrough will help you understand all the key details in a ${length} format perfect for ${audience || 'you'}.

Let’s get started — don’t forget to like and subscribe! 🎥🔥`;

      setScript(demoScript);
      setLoading(false);
    }, 5000); // Simulated 5 sec delay
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
            <li><Link to="/scripts" className="active">Scripts</Link></li>
            <li><Link to="/topics">Topics</Link></li>
            <li><Link to="/strategy">Strategy</Link></li>
          </ul>
        </div>
      </nav>

      <div className="script-page">
        <div className="script-header">
          <h1>🎬 Script Generator</h1>
          <p>Create engaging scripts for YouTube, Reels, TikTok, Podcasts, and more using AI prompts.</p>
        </div>

        <form className="script-form" onSubmit={generateScript}>
          <div className="form-group">
            <label>Topic</label>
            <input
              type="text"
              placeholder="e.g., AI tools for content creators"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Tone</label>
              <select value={tone} onChange={(e) => setTone(e.target.value)}>
                <option value="casual">Casual</option>
                <option value="professional">Professional</option>
                <option value="humorous">Humorous</option>
                <option value="motivational">Motivational</option>
                <option value="educational">Educational</option>
              </select>
            </div>

            <div className="form-group">
              <label>Length</label>
              <select value={length} onChange={(e) => setLength(e.target.value)}>
                <option value="short">Short (30-60 sec)</option>
                <option value="medium">Medium (1-3 mins)</option>
                <option value="long">Long-form (3+ mins)</option>
              </select>
            </div>

            <div className="form-group">
              <label>Platform</label>
              <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
                <option value="youtube">YouTube</option>
                <option value="instagram">Instagram Reels</option>
                <option value="tiktok">TikTok</option>
                <option value="podcast">Podcast</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Target Audience</label>
            <input
              type="text"
              placeholder="e.g., content creators, students, marketers"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
            />
          </div>

          <button type="submit" className="generate-btn">
            {loading ? "Generating..." : "🪄 Generate Script"}
          </button>
        </form>

        <div className="script-output">
          {loading && <p className="loading">⏳ Generating script...</p>}
          {script && (
            <div className="output-box">
              <pre>{script}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ScriptPage;
