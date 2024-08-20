
/* 
// 1. 별도의 파일로 style 사용
import './App.css';

function App() {
  return (
    
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    <div className="App-logo" align="center">
      
      <h1 className="App-logo">더조은에 오신것을 환영합니다</h1>
      <h3>의료용 디지털 영상 표준 활용 실무 프로젝트 과정</h3>
      <p className="class1">react style 적용하기</p>
      <p id="id1">id로 style적용하기</p>
    </div>
    </div>
  );
}
*/
/*
// 2. style을 변수에 객체로 저장하여 사용
function App() {
  const style = {
//  키 : 값,    
//  키 : 값,
//  키 : 객체,
//  키 : 값
    div : {
      backgroundColor : 'navy',
      color : 'white',
      padding : '50px',
      textAlign : 'center',
      fontSize : '30px'
    },
    h1 : {
      color : "red"
    },
    class1 : {
      color : 'yellow'
    },
    id1 : {
      color : 'pink'
    }
  }
  return (
    
    <div style={style.div}>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    <div className="App-logo" align="center">
      
      <h1 className="App-logo" style={style.h1}>더조은에 오신것을 환영합니다</h1>
      <h3>의료용 디지털 영상 표준 활용 실무 프로젝트 과정</h3>
      <p style={style.class1}>react style 적용하기</p>
      <p style={style.id1}>id로 style적용하기</p>
    </div>
    </div>
  );
}
  */
// 3. inline방식으로 style주기
function App() {
  return (
    
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    <div style={{textAlign:'center'}}>
      
      <h1 style={{color:'red', backgroundColor:'pink'}}>더조은에 오신것을 환영합니다</h1>
      <h3>의료용 디지털 영상 표준 활용 실무 프로젝트 과정</h3>
      <p>react style 적용하기</p>
      <p>id로 style적용하기</p>
    </div>
    </div>
  );
}
export default App;
