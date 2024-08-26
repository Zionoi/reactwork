import { Container, Row, Col, Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let YellowBtn = styled.button`
    background : yellow;
    color : brown;
    padding : 10px;
`;

let Box = styled.div`
    padding : 20px;
    background : grey;

`;

let Btn = styled.button`
    background : ${props => props.bg};
    color : brown;
    padding : 10px;
`;


function Detail(props){
    
        // 넘겨받은 파라미터 받기 분해할당(같은 변수명)으로 받으면 여러값 받았을때 편함
        let {index} = useParams();
        
        // .find() 활용 : 해당 객체에 값이 있으면 반환
        let findId = props.clothes.find(function(x){
            return x.id == index;
        })



        console.log(index);
        console.log("findId : ",findId.id);
    return (
        <>
            <YellowBtn>버튼</YellowBtn>
            <Box>div</Box>
            <Btn bg={props.bg}>props버튼</Btn>

            <Btn bg='pink'>핑크 버튼</Btn>
            <Btn bg='yellow'>노란 버튼</Btn>
            
            <Container>
                <Row>
                    <Col lg={6}>
                        <img className="imgList" src={process.env.PUBLIC_URL +`/img/clothes${Number(findId.id)+1}.jpg`}/> 
                    </Col>
                    <Col lg={6}>
                        <h4>{findId.title}</h4>
                        <p>{findId.content}</p>
                        <p>{findId.price}</p>
                        {/* <h4>{props.clothes[findId.id].title}</h4>
                        <p>{props.clothes[findId.id].content}</p>
                        <p>{props.clothes[findId.id].price}</p> */}
                        <Button variant="primary">주문하기</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Detail;