// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HashtagGenerator from "./pages/HashtagGenerator";
import CaptionGenerator from "./pages/CaptionGenerator";
import ScriptPage from './pages/ScriptPage';
import FreelancerCard from "./pages/FreelancerCard";
import CampaignPage from './pages/CampaignPage';
import StrategyGenerator from "./pages/StrategyGenerator";
import TopicGenerator from "./pages/TopicGenerator";

import Home from "./pages/Home";


function App() {
  return (
    <Router>
      {/* // ...existing code... */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/captions" element={<CaptionGenerator />} />
        <Route path="/scripts" element={<ScriptPage />} />
        <Route path="/scripts" element={<HashtagGenerator />} />
        <Route path="/hashtags" element={<HashtagGenerator />} />
        <Route path="/campaigns" element={<CampaignPage />} />
        <Route path="/strategy" element={<StrategyGenerator />} />
        <Route path="/topics" element={<TopicGenerator />} />
        <Route path="/connect" element={<FreelancerCard />} />
      </Routes>
{/* // ...existing code... */}
    </Router>
  );
}

export default App;
