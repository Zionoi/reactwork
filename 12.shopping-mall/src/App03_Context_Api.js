import logo from './logo.svg';
import mainBg from './img/clothes3.jpg';
import clothes4 from './img/clothes4.jpg';
// import clothes1 from './img/clothes1.jpg';
// import clothes2 from './img/clothes2.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col, Button } from 'react-bootstrap';
import { createContext, useState } from 'react';
//import {num1, num2} from './data/ProductList';
import pList from './data/ProductList';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Details';
import axios from 'axios';


/*
    * single page applicateon의 단점
      - 컴포넌트사이의 state공유 어려움
      - props로 넘겨줘야한다
    
    * 공유하는 파일을 만들어서 사용
      1. Context Api 문법
        잘 사용하지 않음
            - 성능 이슈가 있음(하위파일에 변하지 않은 파일도 전부 재렌더링돼서 느림)
            - 재 사용이 어렵다. (하위 자손에서 가끔 데이터를 못찾는경우가 있음)

      2. Redux 같은 외부 라이브러리
        주로 사용하는건 Redux


*/

//1. Context Api 문법
/*
  1) createContext() 로 보관함 만들기
  2) 내가 사용할 위치를 Context1.Provider 로 감싸기
  3) 하위 컴포넌트에서 사용시 : useContext(Context1)
*/


// createContext() : 보관함을 하나 만들었다 생각하면 됨. 앞에 export해줘야 다른 컴포넌트에서 사용 가능
export let Context1 = createContext();
function App() {
  
  let [clothes, setClothes] = useState(pList);
  let navigate = useNavigate();
  let [urlCount, setUrlcount] = useState(2);

  
 
  
  //Context Api에 쓸 stock useState변수 생성후 윙createContext에 담을거임 첫번째 상품10, 두번째상품 7개, 세번째 상품5개
  let [stock, setStock] = useState([10, 7, 5])
  let [stock2, setStock2] = useState([11, 7, 5])
  return ( 
    <div className="App">
  <div className='main-bg'/>
  
  <Navbar bg="black" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/Cart')}}>Cart</Nav.Link>

          </Nav>
        </Container>
  </Navbar>
      <Link to="/">홈</Link> &emsp;
      <Link to="/detail">상세페이지</Link>

    <Routes>
      <Route path='/' element={<div>
        루트페이지 입니다

        <Container>
        <Row>
          <Col md={4}>
          <img className="imgList" src="/img/clothes1.jpg"/>
          <h4>{clothes[0].title}</h4>
          <p>{clothes[0].price}</p>
          </Col>
          <Col md={4}>
          <img className="imgList" src={process.env.PUBLIC_URL +"/img/clothes2.jpg"}/>
          <h4>{clothes[1].title}</h4>
          <p>{clothes[1].price}</p>
          </Col>
          <Col md={4}>
          <img className="imgList" src={clothes4}/>
          <h4>{clothes[2].title}</h4>
          <p>{clothes[2].price}</p>
          </Col>
          
          {
             clothes.map(function(item,i,arr) {
              return (
                <PListCol clothes={item} i={i+1} />

              )
          
          })}
        
        
        </Row>
      </Container>


      <Button variant="success" onClick={() => {
        axios.get(`https://raw.githubusercontent.com/professorjiwon/data/main/data${urlCount}.json`)
             .then(result =>{
                console.log(result.data);
                let clothesCopy = [...clothes,...result.data];
                // clothesCopy.unshift();
                setClothes(clothesCopy);
                setUrlcount(urlCount+1);
                
             })
             .catch(()=>{
              console.log('실패');
              alert('더이상 상품이 없습니다');
             })
        }}>서버에서 데이터 가져오기
      </Button>

      
        </div>} /> 


      <Route path='/detail/:index/' element={
        // <Context1.Provider value={{stock, clothes}}> </Context1.Provider> 여러개 넘겨줄때
        <Context1.Provider value={{stock, clothes}}>
          <Detail clothes={clothes} /> 
        </Context1.Provider>  
       }/> 

     
      <Route path='*' element={<div>없는 페이지 입니다</div>}></Route>
    </Routes>
      
     
    </div>
  );
function About(){
  return(
    <>
    <Outlet></Outlet>
      <h4>회사 정보들</h4>
      <p>더조은 회사</p>
    </>
  )
}



}

function PListCol({clothes, i}){
  return(
    <>
      <Col md={4}>
        <img className="imgList" src={process.env.PUBLIC_URL +`/img/clothes${i}.jpg`}/>
        <h4>{clothes.title}</h4>
        <p>{clothes.price}</p>
      </Col>
    </>
  )
}


export default App;
