import { useEffect, useState } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';



function Detail(props){
    let {index} = useParams();
        
    // .find() 활용 : 해당 객체에 값이 있으면 반환
    let findId = props.clothes.find(function(x){
        return x.id == index;
    })
       
    return (
        <>
            
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