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


function App() {
  
  let [clothes, setClothes] = useState(pList);
 
  return ( 
    <div className="App">
      
      <Navbar bg="black" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        <div className='main-bg'/>
        {/* <img src={mainBg}/> */}


   

      <Container>
        <Row>
          <Col md={4}>
          {/* 경로를 바로 입력할땐 public 폴더에 이미지를 넣으면 가능하다 임폴트 따로 안해도됨.*/}
          <img className="imgList" src="/img/clothes1.jpg"/>
          <h4>{clothes[0].title}</h4>
          <p>{clothes[0].price}</p>
          </Col>
          <Col md={4}>
          {/* ~~~.co.kr에 배포시에는 이렇게 적어주면 된다  // ~~~.com의 경로에 배포하면 상관없음*/}
          <img className="imgList" src={process.env.PUBLIC_URL +"/img/clothes2.png"}/>
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

     
    </div>
  );
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


/*
    매우 작은 기기(모바일) - xs{} 너비가 758px 미만이 화면
    작은 기기(태블릿) - sm{} 너비가 992px미만
    중간 기기(노트북) - md{} 너비가 1200px미만인 화면
    큰 기기{데스크탑} - lg{} 너비가 1200px이상인 화면

    - 한 행에 12개의 열을 가진다(md 이상일때)
    <Col md={6}>
    <Col md={3}>
    <Col md={1}>
    <Col md={1}>
    <Col md={1}>


*/

export default App;
