import logo from './logo.svg';
import mainBg from './img/clothes3.jpg';
import clothes4 from './img/clothes4.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import pList from './data/ProductList';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Details';
import axios from 'axios';
import Cart from './pages/Cart';



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
          
          
          {
             clothes.map(function(item,i,arr) {
              return (
                <PListCol clothes={item} key={i} />

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
      <Route path='/detail/:pid/' element={<div>상세페이지 입니다<Detail clothes={clothes}  bg={'green'}/></div>}/> 

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
      <Link to={`/detail/${clothes.id}`} className="link-wrapper" style={{cursor:'pointer'}}>
        <img className="imgList" src={process.env.PUBLIC_URL + `/img/clothes${clothes.id}.jpg`} alt={clothes.title} />
        <h4>{clothes.title}</h4>
        <p>{clothes.price}</p>
      </Link>
      <hr/>
      </Col>
    </>
  )
}


export default App;
