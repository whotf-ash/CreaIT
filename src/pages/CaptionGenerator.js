import React, { useState } from "react";
import "./CaptionGenerator.css";

function CaptionGenerator() {
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("casual");
  const [length, setLength] = useState("short");
  const [platform, setPlatform] = useState("instagram");
  const [extraInfo, setExtraInfo] = useState("");
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();

    if (!topic.trim()) {
      alert("Please enter a topic.");
      return;
    }

    setLoading(true);
    setCaption("⏳ Generating caption...");

    setTimeout(() => {
      let base = `Here's something about "${topic}"`;

      const tones = {
        casual: "😎 Just chillin' and doing what I love!",
        professional: "Delivering consistent value through excellence and execution.",
        funny: "😂 Can't believe I did this... but hey, it worked!",
        inspirational: "✨ Remember: greatness starts with showing up!",
        educational: "🧠 Learn something new every day, even if it's small.",
        storytelling: "Once upon a time, it all started with a single post..."
      };

      const lengths = {
        short: `${base}. ${tones[tone]}`,
        medium: `${base}. ${tones[tone]} ${extraInfo ? "P.S. " + extraInfo : ""}`,
        long: `${base}. ${tones[tone]} ${extraInfo ? "Here’s a little more: " + extraInfo : ""} Let’s keep the momentum going! 🚀`
      };

      setCaption(lengths[length]);
      setLoading(false);
    }, 5000); // 5-second simulated delay
  };

  const copyCaption = () => {
    navigator.clipboard.writeText(caption).then(() => {
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
            <li><a href="/captions" className="active">Captions</a></li>
            <li><a href="/hashtags">Hashtags</a></li>
            <li><a href="/scripts">Scripts</a></li>
            <li><a href="/topics">Topics</a></li>
            <li><a href="/strategy">Strategy</a></li>
          </ul>
        </div>
      </nav>

      <div className="tool-page">
        <div className="tool-header">
          <h1>📝 Caption Generator</h1>
          <p>Create compelling captions that engage your audience and boost your social media presence</p>
        </div>

        <form className="form-container" onSubmit={handleGenerate}>
          <div className="form-group">
            <label>Content Topic *</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g., Morning workout, Travel photography..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Tone & Style</label>
            <select value={tone} onChange={(e) => setTone(e.target.value)} className="form-select">
              <option value="casual">Casual & Friendly</option>
              <option value="professional">Professional</option>
              <option value="funny">Humorous & Witty</option>
              <option value="inspirational">Inspirational & Motivating</option>
              <option value="educational">Educational & Informative</option>
              <option value="storytelling">Storytelling & Narrative</option>
            </select>
          </div>

          <div className="form-group">
            <label>Caption Length</label>
            <select value={length} onChange={(e) => setLength(e.target.value)} className="form-select">
              <option value="short">Short (1-2 sentences)</option>
              <option value="medium">Medium (3-5 sentences)</option>
              <option value="long">Long (6+ sentences)</option>
            </select>
          </div>

          <div className="form-group">
            <label>Platform</label>
            <select value={platform} onChange={(e) => setPlatform(e.target.value)} className="form-select">
              <option value="instagram">Instagram</option>
              <option value="facebook">Facebook</option>
              <option value="twitter">Twitter/X</option>
              <option value="linkedin">LinkedIn</option>
              <option value="tiktok">TikTok</option>
              <option value="general">General/All Platforms</option>
            </select>
          </div>

          <div className="form-group">
            <label>Additional Context (Optional)</label>
            <textarea
              className="form-textarea"
              placeholder="Call-to-action, emojis, or other notes..."
              value={extraInfo}
              onChange={(e) => setExtraInfo(e.target.value)}
            />
          </div>

          <button type="submit" className="generate-btn" disabled={loading}>
            {loading ? "Generating..." : "Generate Caption ✨"}
          </button>
        </form>

        {loading && (
          <p className="loading">Please wait while we create your caption...</p>
        )}

        {caption && !loading && (
          <div className="example-section">
            <h4>📌 Your Generated Caption</h4>
            <div className="example-text">{caption}</div>
            <button className="copy-all-btn" onClick={copyCaption}>📋 Copy Caption</button>
          </div>
        )}

        <div className="tips-section">
          <h3>💡 Caption Writing Tips</h3>
          <ul className="tips-list">
            <li><span className="tip-icon">→</span> Start with a hook or question</li>
            <li><span className="tip-icon">→</span> Include a clear call-to-action</li>
            <li><span className="tip-icon">→</span> Use emojis for visual appeal</li>
            <li><span className="tip-icon">→</span> Stay consistent with your brand voice</li>
            <li><span className="tip-icon">→</span> Tell a story or be authentic</li>
          </ul>
        </div>

        {copied && <div className="toast show">Copied to clipboard! ✅</div>}
      </div>
    </div>
  );
}

export default CaptionGenerator;
