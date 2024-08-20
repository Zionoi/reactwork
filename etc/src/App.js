/* eslint- */
import React, {useState} from 'react';
import './App.css';

function App() {
  let [title, titleCh] = useState(['더조은', '떡볶이맛집','집가고싶다']);
  return (
    <div className="App">
      <dic>연습용 페이지</dic>
      <div className="list">
        <h3> {title[0]}</h3>
        <p>8월 20일</p>
        <hr/>
      </div>
      <div className="list">
        <h3> {title[1]}</h3>
        <p>8월 20일</p>
        <hr/>
      </div>
      <div className="list">
        <h3> {title[2]}</h3>
        <p>8월 20일</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
