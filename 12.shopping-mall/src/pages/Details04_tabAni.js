import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Nav} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './../App.css';

/*
    탭 만들기
*/
/*
    애니메이션 만들기
    1) 애니메이션 동작 전 스타일을 담을 className 설정
    2) 애니메이션 동작 후 스타일을 담을 className 설정
    3) transition으로 ?초동안 변하게
    4) 원할 때 동작 전 className을 넣었다 동작 후 className으로 변경
*/






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

                {/* state가 0이면 내용0을, 1이면 내용1을 보여주기 */}
                {/* 1. 삼항연산자 사용 (Nav에 onClick으로 setTab컨트롤 set 값 변경해줌) */}
                {/* {tab == 0 ? <div>내용 0</div> : (tab == 1 ? <div>내용 1 </div> : <div>내용 2</div>)} */}


            {/* 2. component 사용 */} 
            <TabContent tab={tab} />



          
        </div>
    )
}
//if문 사용
// function TabContent({tab}){
//     if(tab == 0)
//         return <div>component 내용 0</div>
//     else if(tab == 2)
//         return <div>component 내용 2</div>
//     else
//         return <div>component 내용 1</div>
// }

//배열 리턴
// function TabContent({tab}){
//     // let ar = [<div>배열 내용 0</div>,<div>배열 내용 1</div>,<div>배열 내용 2</div>];
//     // ar[tab]
//     // 위에를 한줄로 줄이면 아래처럼 가능 배열만들고 매개변수값 받아서 인덱스 tab 지정
//     return [<div>배열 내용 0</div>,<div>배열 내용 1</div>,<div>배열 내용 2</div>][tab]
// }
// }

//배열 리턴2
function TabContent({tab}){
    // 애니매이션을 주기위한 유즈스테이트 변수 선언
    let [fade, setFade] = useState('')

    // tab이 변할때마다 setFade로 fade값 바꿔줌
    useEffect(()=>{
        // 리턴문구 실행후 시간차를 두고 end값 넣어주기 위한 문구
        setTimeout(() => {setFade('end')}, 500)
        // 리턴을 별도로 주면 리턴먼저 실행후 위에 문구가 실행됨.
        return () => {
            setFade('start')
        }
    },[tab])


    return(
        // css에 해당 클래스내임 호출
        <div className={fade}> 
            {/* 위아 다르게 아래형태처럼 {중괄호} 없이 리턴하면 html형태로가는데 html에는 이런 문법이없음 그래서 {}객체형태로 보내줌 */}
            {[<div>배열 내용 0</div>,<div>배열 내용 1</div>,<div>배열 내용 2</div>][tab]}
        </div>
    )

}



export default Detail;