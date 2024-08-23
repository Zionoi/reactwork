import { useEffect, useState } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';



function Detail(props){
    let {index} = useParams();
        
    /*
      - useEffect(() => { 실행할 코드}, [변경되는 state])
        디펜더시변경되는 state가 변경되어 재렌더링 될때만 호출이 됨
        이외의 재렌더링시에는 호출되지 않음
      
      - useEffect(() => { 실행할 코드 }, [])
        최초 mount될 때 한번만 실행

      - useEffect(() => {변수.. return(리턴할 코드)}, [])
        return문법 : clean up function이라 한다.
        useEffect가 실행되기 전에 return을 먼저 실행
        return은 mount시 실행안되고, unmount시에만 실행됨.

    

    * 정리
        useEffect(() => {}) : 재렌더링 될때마다 실행
        useEffect(() => {},[]) : mount 한번만 실행
        useEffect(() => {},[??]) : ??이 재렌더링 될때마다 실행
        useEffect(() => {... return(numout시 한번 실행)}) :   return값이 unmount시 한번 실행
      
    */




    // .find() 활용 : 해당 객체에 값이 있으면 반환
    let findId = props.clothes.find(function(x){
        return x.id == index;
    })
    
   // let [alert, setAlert] = useState(true);
    let [count, setCount] = useState(0);

    // let show = ()=>{
    //     setAlert(!alert);
    //     if(alert) alert("참");
    // }

    // //useEffect : 화면에 어떤것이든 업데이트될때 호출되는 메소드
    // useEffect(() => {
    //     let timer = setTimeout(() => {setAlert(false)}, 1000)
    //     // useEffect가 실행되기 전에 return을 먼저 실행 // return은 mount시 실행안되고, unmount시에만 실행됨.
    //     return() => {
    //         clearTimeout(timer); //기존에 있던 타이머 모두 삭제

    //     }
    //     console.log("실행됨");
    // },[count])
    // useEffect 함수끝에 , [요소]를 넣으면 해당 요소가 바뀔때만 호출됨. 만약 []안에 아무것도 안넣으면 최초 한번 실행될때만 호출됨.

    let [num, setNum] = useState('');
    useEffect(() => {
        //isNaN(변수) : 문자가 들어오면 true 반환. 숫자이면 false
        if(isNaN(num) == true){
            alert('숫자만 넣을수 있다');
        }
    },[num])


    return (
        <div>

            <input onChange={(e) => {setNum(e.target.value)}}/>

            {/* 내가만든버전 */}
            {/* <button onClick={show}> {alert == true ? "참" : "거짓"}</button>  */}

            {/* 교수님이 만든 버전 */}
{/*             
            { alert ? <h2>2초 이내 구매시 할인</h2> : null}
            <button onClick={()=>{setAlert(!alert)}}>alert 버튼</button>
            {count}
            <button onClick={()=>{setCount(count+1)}}>count 버튼</button> */}

                <Container>
                    <Row>
                        <Col lg={6}>
                            <img className="imgList" src={process.env.PUBLIC_URL +`/img/clothes${Number(findId.id)+1}.jpg`}/> 
                        </Col>
                        <Col lg={6}>
                            <h4>{findId.title}</h4>
                            <p>{findId.content}</p>
                            <p>{findId.price}</p>
                            <Button variant="primary">주문하기</Button>
                        </Col>
                    </Row>
                </Container>
          
        </div>
    )
}

export default Detail;