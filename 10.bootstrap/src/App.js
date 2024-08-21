import './App.css';
import logo from './component/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <section>
        <img src={logo}/>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
