import { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Button, Nav} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './../App.css';
import {Context1} from './../App';


/*
    * single page applicateon의 단점
      - 컴포넌트사이의 state공유 어려움
      - props로 넘겨줘야한다
    
    * 공유하는 파일을 만들어서 사용
      1. Context Api 문법
        잘 사용하지 않음
            - 성능 이슈가 있음(하위파일에 변하지 않은 파일도 전부 재렌더링돼서 느림)
            - 재 사용이 어렵다. (하위 자손 찾기 어려움)

      2. Redux 같은 외부 라이브러리
        주로 사용하는건 Redux


*/






function Detail(props){

    // useContext() : Context 데이터 받을때 사용 괄호 안에 있는 데이터 해체해주는 과정 ex {stock, clothes}
    let a = useContext(Context1);
    let {stock, clothes} = useContext(Context1);
    
    console.log(a);
    console.log(a.stock);
    console.log(...a.stock);
    console.log(stock);
    console.log(clothes);
    let {index} = useParams();
     

    let findId = props.clothes.find(function(x){
        return x.id == index;
    })
    
    let [alert, setAlert] = useState(true);
    
 

    let [num, setNum] = useState('');
    useEffect(() => {
        if(isNaN(num) == true){
            alert('숫자만 넣을수 있다');
        }
    },[num])

    let [tab, setTab] = useState(0);

    let [fade2, setFade2] = useState('start')

    useEffect(()=>{
        setFade2('end')
    },[])


    return (
        <div>

            <input onChange={(e) => {setNum(e.target.value)}}/>
            { alert ? <h2>2초 이내 구매시 할인</h2> : null}

                <Container className={fade2}>
                    <Row>
                        <div>
                            ㄴㅇㄹㄴ
                        <Col lg={6}>
                            <img className="imgList" src={process.env.PUBLIC_URL +`/img/clothes${Number(findId.id)+1}.jpg`}/> 
                        </Col>
                        <Col lg={6}>
                            <h4>{findId.title}</h4>
                            <p>{findId.content}</p>
                            <p>{findId.price}</p>
                            <Button variant="primary">주문하기</Button>
                        </Col>
                        </div>
                    </Row>
                </Container>
                                {/*defaultActiveKey : 맨처음 보여줄 페이지 설정 */}
                <Nav variant="pills" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">BUTTON 0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">BUTTON 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2" >BUTTON 2</Nav.Link>
                </Nav.Item>
                </Nav>

                <TabContent tab={tab} />



          
        </div>
    )
}

function TabContent({tab}){
    let [fade, setFade] = useState('')

    let {stock} = useContext(Context1);

    useEffect(()=>{
        setTimeout(() => {setFade('end')}, 500)
        return () => {
            setFade('start')
        }
    },[tab])


    return(
        <div className={fade}> 
          {[<div>{stock}</div>,<div>{stock[1]}</div>,<div>{stock[tab]}</div>][tab]}
        </div>
    )

}



export default Detail;