import { useNavigate, Routes, Route, Link } from 'react-router-dom';
import Home from './home/Home';
import Board from './board/Board';
import Sidebar from './Sidebar';
import VisitSection from './VisitSection';
import FriendsSection from './FriendsSection';

function MainPanel({ onLogout }) { // onLogout props 추가
    const navigate = useNavigate();
  
    const handleLogout = () => {
      onLogout(); // 부모 컴포넌트의 로그아웃 핸들러 호출
      navigate('/login'); // 로그인 페이지로 리다이렉트
    };
  
    return (
      <div style={{ display: 'flex' }}>
        <div className="left-panel">
        <Sidebar />
        </div>
        {/* <div className="center-panel">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Board />} />
           
          </Routes>
        </div> */}
        <div className="right-panel">
         
          <button onClick={handleLogout} className="btn btn-outline-danger">로그아웃</button>
        </div>
        <div>
        <aside className="right-side">
          <VisitSection />
          <FriendsSection />
        </aside>
        </div>
      </div>
    );
  }
  
  export default MainPanel;
  