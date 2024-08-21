
import logo from '../logo.svg';
import '../App.css';
import { Button, Modal, Form } from 'react-bootstrap';
import {useState} from 'react';

function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <header>
                <img src={logo}  className="App-logo"/>
                <h2>ZIONOIZ</h2>
                <div className="login">
                    <Button variant="outline-secondary" size="sm">회원가입</Button>&emsp;
                    <Button variant="outline-secondary" size="sm" onClick={handleShow}>로그인</Button>
                </div>
                <Login show={show}/> {/* 인라인 show는 아래 로그인 함수가 나눠져있을때 필요한것 지금은 필요없다. */}
            </header>
        </>
    )

function Login(){
    // 모달 부트스트랩 활용
    return(
        <>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>ID</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>PW</Form.Label>
                <Form.Control type="password" />
            </Form.Group>
        </Form> 

        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    )
}
}

export default Header;