// src/App.js
import React from 'react';
import Sidebar from '../Sidebar';
import ProfileSection from '../ProfileSection';
import StickerSection from '../StickerSection';
import CommentsSection from '../CommentsSection';
import VisitSection from '../VisitSection';
import FriendsSection from '../FriendsSection';
import '../../App.css';

function Home() {
    return (
      <div className="app">
        <main className="main-content">

          <ProfileSection />
          <StickerSection />
          <CommentsSection />
        </main>
        
      </div>
    );
  }
  export default Home;