import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Compo1 from './components/Compo'

function App() {
  return (
    <div className="App">
      <MyHeader/>

      <h1>본문입니다</h1>
      <Compo1>글자 넣으면 어떻게 되는데</Compo1>

      <MyFooter/>

    </div>
  );
}

export default App;
