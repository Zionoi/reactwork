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

/*
  * react-router-dom
  - 기존의 페이지 나누기
    만약 /detail로 접속하면 기존의 index.html파일을 모두 비운 후 페이지를 보여줌
  
  - 페이지를 교체시켜주는 api : router-dom

  * 실행순서
  1. 설치 : npm i react-router-dom
  2. index.js 파일에서 <BroswerRouter></BroswerRouter> 로 <App/> 감싸기 
  3. import { BroswerRouter } from '/react-router-dom'; 임폴트 하면 세팅 끝

*/

/*
  * ajax로 서버로부터 데이터 얻어오기
    1. 설치하기 : npm i axios
    2. import axios from 'axios'; 임폴트하기

*/



function App() {
  
  let [clothes, setClothes] = useState(pList);
  // 페이지의 이동을 도와주는 함수 (useNavigate 임폴트 해야함 'react-router-dom' 라이브러리)
  let navigate = useNavigate();

  //href와의 차이점 : href는 get방식이고 html문법이라 오류및 여타 관리에 불편함. 관리차원에서 navigate를 사용하는것이 낫다

  /*
    총총
    링크 거는방법
    1. <Link to="">링크페이지</Link>
    2. href="링크걸 주소" 인라인속성
    3. useNavigate() 함수 사용

  */
  
    let [urlCount, setUrlcount] = useState(2);
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



            {/* 
            <Nav.Link onClick={()=>{ navigate(1)}}>앞으로 이동</Nav.Link>
            <Nav.Link onClick={()=>{ navigate(-1)}}>뒤로 이동</Nav.Link>
             */}
          </Nav>
        </Container>
  </Navbar>
      {/* 링크를 걸려면 아래문구 사용 Link 임폴트해야함 react-router-dom 라이브러리*/}
      <Link to="/">홈</Link> &emsp;
      <Link to="/detail">상세페이지</Link>

    <Routes>
      {/* 하나의 페이지  // 위치는 path로 설정 localhost:3000/detail 이되는것 // */}
      <Route path='/' element={<div>
        루트페이지 입니다

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
      {/* AJAX로 데이터 가져오기 axios*/}
      {/* <Button variant="success" onClick={() => {
        axios.get('https://raw.githubusercontent.com/professorjiwon/data/main/data2.json')
             .then(result =>{
                console.log(result);
                let clothesCopy = [...clothes];
                clothesCopy.unshift(result);
                setClothes(clothesCopy);
                console.log(clothes);
             })
             .catch(()=>{
              console.log('실패');
             })
        }}>서버에서 데이터 가져오기
      </Button> */}

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
             })
        }}>서버에서 데이터 가져오기
      </Button>

      
        </div>} /> 


      {/* Route를 여러개 두면 여러페이지가 됨. */}


      {/* ***** 상품 정보 페이지로 넘겨주는 방법 ***** */}
      {/* <Route path='/detail' element={<div>상세페이지 입니다<Detail clothes={clothes}/></div>}/>  */}


      {/* 이 방법은 상품 갯수별로 코드 한줄 만들어야함 너무 빡하드코딩 */}
      {/* <Route path='/detail/0' element={<div>상세페이지 입니다<Detail clothes={clothes[0]}/></div>}/>  */}


          {/* path 파라미터로 넘겨줄 수 있음 ///  경로뒤에 /:넘겨줄인덱스 변수명     ex path='detail/:변수명  
              넘겨 받은 페이지에서는 해당 파라미터를 useParams() 함수로 받을수 있다 해당페이지에 임폴트 해야함*/}
      {/* <Route path='/detail/:index' element={<div>상세페이지 입니다<Detail clothes={clothes}/></div>}/>  */}


      {/* 파라미터를 여러개 넘겨주기 */}
      <Route path='/detail/:index/' element={<div>상세페이지 입니다<Detail clothes={clothes}  bg={'green'}/></div>}/> 


      {/* 경로에 :로 받는게 아닌건 다 문자임. 경로로 인식됨. */}
      {/* <Route path='/detail/:index/name/:member' element={<div>상세페이지 입니다<Detail clothes={clothes}/></div>}/>  */}


      <Route path='/cart' element={<div>장바구니페이지 입니다</div>} />

{/*   ************  하위 페이지 만들기 **************
      <Route path='/about' element={<div><About/></div>} />
      <Route path='/about/member' element={<div>사람의 정보</div>} />
      <Route path='/about/location' element={<div>강남</div>} />
 */}

{/* NestedRoutes ~~의 하위의 것들을 하위요소로 넣어서 페이지 보여주기  상위페이지의 하쉬요소로 구문넣어야함 즉 아웃렛 Outlet태그를 사용해서 보여줘야함*/}
      <Route path='/about' element={<About/>}>
        <Route path='member' element={<div>사람의 정보</div>} />
        <Route path='location' element={<div>강남</div>} />
      </Route>
      {/* 경로에 '*'을 써주면 잘못된경로로 들어왔을경우 다 여기로 보내준다 */}
      <Route path='*' element={<div>없는 페이지 입니다</div>}></Route>
    </Routes>
      
       
        {/* <img src={mainBg}/> */}
     
    </div>
  );
function About(){
  return(
    <>
    {/* Outlet태그로 하위요소를 보여줄 위치를 지정 */}
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
