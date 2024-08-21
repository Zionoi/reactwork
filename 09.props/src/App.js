import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Body from './component/Body';
import Button from './component/Button';

/*
function App() {

  return (
    <div className="App">
      <Header/>
      <section>
      <Body/>
      </section>
      <Footer/>
      
    </div>
  );
}
*/
/*
function App() {
  // 1. 변수에 담긴값을 Body로 넘겨주기(키 = 값 인라인속성으로)
  const addr = "서초구 강남대로";
  const name = "이고잉";

  return (
    <div className="App">
      <Header/>
      <section>
      <Body 키_내맘대로변수명 = {addr} user={name}/>
      </section>
      <Footer/>
      
    </div>
  );
}
*/


// 2. 객체형태로 넘기기
function App() {
  const userInfo = {
    name : "이고잉",
    addr : "서초구 강남대로",
    likeList : ["캐릭터","만화","웹툰"] 
  } 
  return (
    <div className="App">
      <Header/>
      <section>
      {/* {<Body userInfo={userInfo}/>} // 2.1 */}
      {/*<Body {...userInfo}/>*/}{/*객체를 풀어서 넘기기*/}
      <Body/>
      </section>
      <Footer/>
      
    </div>
  );
}

export default App;
