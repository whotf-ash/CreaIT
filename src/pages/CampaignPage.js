// CampaignPage.js
import React from 'react';
import './CampaignPage.css';

const campaigns = [
  {
    title: "AI Fitness Reel Challenge",
    description: "Edit and publish a 15-sec fitness reel using AI-generated voiceover and effects.",
  },
  {
    title: "Travel Vlog Collab",
    description: "Join fellow creators to produce a travel series across 3 countries.",
  },
  {
    title: "Food Shorts Contest",
    description: "Showcase your food editing skills with recipe videos under 30 seconds.",
  },
  {
    title: "Motivational Mondays",
    description: "Post a weekly short-form video with an inspiring quote or voiceover using our AI Caption Tool.",
  },
  {
    title: "Tech Breakdown Mini-Series",
    description: "Create 1-minute explainer videos on trending gadgets using AI script & voiceover tools.",
  },
  {
    title: "Instagram Growth Hack Series",
    description: "Document your progress and strategies to grow an account from 0 to 10K using the Strategy Planner.",
  },
  {
    title: "Fashion Flip AI Reel",
    description: "Film outfit transitions and use AI-powered video filters + captions to make it trend.",
  },
  {
    title: "YouTube Hook Mastery",
    description: "Craft and post 10 viral hooks using AI script generator. Share results in a video breakdown.",
  },
  {
    title: "Daily Niche Shorts",
    description: "Post 30 niche-based short videos (1 per day) using the Topics + Hashtags tools.",
  },
  {
    title: "Collab Content Drop",
    description: "Partner with 2 other creators to launch a collaborative content campaign around a trending topic.",
  },
  {
    title: "AI Meme Challenge",
    description: "Create a meme-based short video using our caption + AI script tools and track engagement.",
  },
  {
    title: "Voiceover Remix Reel",
    description: "Download a trending reel, mute it, and add your AI voiceover twist with a fresh narrative.",
  }
];

function CampaignPage() {
  return (
    <div className="campaign-container">
      <h1>📣 Active Campaigns</h1>
      <p>Explore content campaigns and start collaborating now.</p>

      <div className="campaign-grid">
        {campaigns.map((c, index) => (
          <div className="campaign-card" key={index}>
            <h3>{c.title}</h3>
            <p>{c.description}</p>
            <button className="join-btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CampaignPage;
