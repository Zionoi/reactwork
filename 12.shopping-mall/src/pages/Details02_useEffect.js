import { useEffect, useState } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

/*
    lifeCycle(생명주기)
    - 컴포넌트
    1. 생성 (mount)
    2. 재렌더링 (update)
    3. 소멸 (unmount)

    class Detail2 extends React.Component {
        componentDidMount(){
            Detail2 컴포넌트가 생성되고 나서 실행할 코드
        }
        componentDidUpdate(){
            Detail2 컴포넌트가 update되고 나서 실행할 코드
        }
        componentWillUnmount(){
            Detail2 컴포넌트가 삭제되기 전 실행할 코드
        }
    }

//  -useEffect : 로딩 시간이 긴 요소는 useEffect안에 넣어준다
        ex) 1) 어려운 연산
            2) 서버에서 데이터를 가져오는 작업
            3) 타이머 같은것
    
    -side Effect : 함수의 핵심기능이 아닌 부가기능

        
*/



function Detail(props){
    
        // 넘겨받은 파라미터 받기 분해할당(같은 변수명)으로 받으면 여러값 받았을때 편함
        let {index} = useParams();
        
        // .find() 활용 : 해당 객체에 값이 있으면 반환
        let findId = props.clothes.find(function(x){
            return x.id == index;
        })

        // 로딩 시간이 긴 요소는 useEffect안에 넣어준다
        /*  ex) 1) 어려운 연산
                2) 서버에서 데이터를 가져오는 작업
                3) 타이머 같은것

        */
        useEffect(() => {
            // mount, update 될 때 실해
            // 그래서 LifeCycle hook 이라 함
            
            console.log('로드 되고 실행')
        })
        console.log('로드 되고 실행222')

        for(var i=1; i<10000; i++){
            console.log(1);
        }
        
        let [count, setCount] = useState(0);

    return (
        <>
            {count}
            <button onClick={() => setCount(count+1)}>1증가버튼</button>
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
        </>
    )
}

export default Detail;