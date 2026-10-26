// FreelancerPage.js
import React from 'react';
import './FreelancerCard.css'; // custom styles

const freelancers = [
  {
    name: 'Ashwin',
    role: 'Video Editor',
    platform: 'YouTube Shorts',
  },
  {
    name: 'Nikita',
    role: 'Script Writer',
    platform: 'Instagram Reels',
  },
  {
    name: 'Raj',
    role: 'Thumbnail Designer',
    platform: 'YouTube Thumbnails',
  },
  {
    name: 'Priya',
    role: 'Social Media Manager',
    platform: 'Instagram & TikTok',
  },
  {
    name: 'Dev',
    role: 'Voiceover Artist',
    platform: 'Podcasts & Shorts',
  },
  {
    name: 'Meena',
    role: 'Instagram Reel Editor',
    platform: 'Fitness Content',
  },
  {
    name: 'Karan',
    role: 'Motion Graphics',
    platform: 'Promo Videos',
  },
  {
    name: 'Sara',
    role: 'Content Strategist',
    platform: 'YouTube Channels',
  },
];

function FreelancerPage() {
  return (
    <div className="freelancer-container">
      <h1>🚀 Connect with Freelancers</h1>
      <p>Find the right talent to supercharge your content creation journey.</p>

      <div className="freelancer-grid">
        {freelancers.map((freelancer, index) => (
          <div className="freelancer-card" key={index}>
            <div className="freelancer-icon">👤</div>
            <h3>{freelancer.name}</h3>
            <p><strong>{freelancer.role}</strong></p>
            <p>{freelancer.platform}</p>
            <button className="hire-btn">View Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FreelancerPage;
