import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Nav} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './../App.css';



function Detail(props){
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

    useEffect(()=>{
        setTimeout(() => {setFade('end')}, 500)
        return () => {
            setFade('start')
        }
    },[tab])


    return(
        <div className={fade}> 
          {[<div>배열 내용 0</div>,<div>배열 내용 1</div>,<div>배열 내용 2</div>][tab]}
        </div>
    )

}



export default Detail;