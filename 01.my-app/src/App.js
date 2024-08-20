import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App(){
  // 주석
  /* 여러줄 주석   */
  // 내용이 한줄일땐 내용을 감싸주지 안아도 된다
  // return <h1>React 처음 시작 또 시작</h1>
  
  /*return (
    <div className="App">
      <header className="App-header">
      <h1>React 처음 시작 또 시작</h1>
      <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  )*/

    /*
      * return안이 여러줄 일때
      1. 소괄호를 반드시 넣어준다
      2. 루트 태그를 반드시 넣어준다.

    */

      // return ( 소괄호 바로아래에는 부모태그가 들어가야한다. 여러줄 주석넣으면 오류뜸
    return (
      <Fragment className="App">
         <header className="App-header">
          <span>React</span><span>여러줄 리턴</span>
          <img src={logo} className="App-logo" alt="logo" />
        {/* 리턴 안에서 쓰는 주석 */}
        </header>
      </Fragment>
    )
}

export default App;
