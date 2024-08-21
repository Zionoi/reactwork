
import LightOnOff from './component/Light-on-off';
import './App.css';
import Counter from './component/Counter';
import Member_enroll from './component/Member-enroll';

function App() {
  return (
    <div className="App">
      <Counter></Counter><hr/>
      <LightOnOff></LightOnOff><hr/>
      <Member_enroll></Member_enroll><hr/>
    </div>
  );
}

export default App;
