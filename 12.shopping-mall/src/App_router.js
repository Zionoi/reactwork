import logo from './logo.svg';
import mainBg from './img/clothes3.jpg';
import clothes4 from './img/clothes4.jpg';
// import clothes1 from './img/clothes1.jpg';
// import clothes2 from './img/clothes2.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
//import {num1, num2} from './data/ProductList';
import pList from './data/ProductList';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Details';




function App() {
  
  let [clothes, setClothes] = useState(pList);
 
  let navigate = useNavigate();


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
        </div>} /> 
      <Route path='/detail/:index/:member' element={<div>상세페이지 입니다<Detail clothes={clothes}/></div>}/> 

      <Route path='/cart' element={<div>장바구니페이지 입니다</div>} />

      <Route path='/about' element={<About/>}>
        <Route path='member' element={<div>사람의 정보</div>} />
        <Route path='location' element={<div>강남</div>} />
      </Route>
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
