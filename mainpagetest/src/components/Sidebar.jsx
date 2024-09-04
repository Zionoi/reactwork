// src/components/Sidebar.js
import React from 'react';
import { useNavigate, Routes, Route, Link } from 'react-router-dom';
import Home from './home/Home';
import Board from './board/Board';
import './Sidebar.css'; // 개별 스타일 적용
import Diary from './diary/Diary';
import InputDiary from './diary/InputDiary';
import GetDiary from './diary/GetDiary';

function Sidebar() {
  return (
    <div style={{ display: 'flex' }}>
      <nav className="sidebar">
      <Link to="/"><div className="icon">🏠</div></Link>
      <Link to="/diary"><div className="icon">📚</div></Link>
      <Link to="/board"><div className="icon">🖥️</div></Link>
      <div className="icon">💬</div>
      <div className="icon">☁️</div>
      <div className="icon">🍴</div>
    </nav>
      <div className="center-panel">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/diary" element={<Diary />} />
      <Route path="/board" element={<Board />} />
      <Route path="/inputDiary/:date" element={<InputDiary />} /> {/* InputDiary 페이지 라우팅 */}
      <Route path="/getDiary/:dNum" element={<GetDiary />} />
    </Routes>
  </div>
    
    </div>
  );
}

export default Sidebar;
