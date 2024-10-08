import logo from './logo.svg';
import mainBg from './img/clothes3.jpg';
import clothes4 from './img/clothes4.jpg';
// import clothes1 from './img/clothes1.jpg';
// import clothes2 from './img/clothes2.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
//import {num1, num2} from './data/ProductList';
import pList from './data/ProductList';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Details';
import axios from 'axios';
import Cart from './pages/Cart';

/*
  ** 장바구니 만들기

  * 외부 라이브러리 사용(Redux)
  서버가 열려있다면 닫고 cmd창에
  1) npm install @reduxjs/toolkit react-redux 쳐주기
  2) src폴더 밑에 store폴더 만들고, store.js파일 만들기(src에 안만들어도 import만 잘하면 사용하는데 문제 없음 정리목적)
  3) store.js 파일에 import {configureStore} from '@reduxjs/toolkit' 임폴트 해줌
  4) 이후 js파일에 configureStore함수 안에 return대신 reducer : {} 를 사용함

  5) index.js 에 <App/>및 컴포넌트를 감싸주는 <Provider store={store}> </provider> 태그 만들어주고
  Provider, store 둘다 인덱스 파일에 임폴트
  import {Provider} from 'react-redux';
  import store from './store/store';

*/


function App() {
  
  let [clothes, setClothes] = useState(pList);
  let navigate = useNavigate();


    let [urlCount, setUrlcount] = useState(2);
  return ( 
    <div className="App">
  <div className='main-bg'/>
  
  <Navbar bg="black" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
            {/* <Nav.Link onClick={()=>{ navigate('/detail')}}>Detail</Nav.Link> */}
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
          {/* <Col md={4}>
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
          </Col> */}
          
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


      {/* 파라미터를 여러개 넘겨주기 */}
      <Route path='/detail/:index/' element={<div>상세페이지 입니다<Detail clothes={clothes}  bg={'green'}/></div>}/> 

        {/* Cart 컴포넌트 호출 */}
      <Route path='/cart' element={<Cart />} />
      
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
      <Link to={`/detail/${clothes.id}`} className="link-wrapper">
        <img className="imgList" src={process.env.PUBLIC_URL + `/img/clothes${i}.jpg`} alt={clothes.title} />
        <h4>{clothes.title}</h4>
        <p>{clothes.price}</p>
      </Link>
      <hr/>
      </Col>
    </>
  )
}


export default App;
