import axios from 'axios';
import { useEffect, useState } from 'react';
import {Table} from 'react-bootstrap';


function Cart(){

    const [list, setList] = useState([]);

    useEffect(()=>{
        axios.get('/react/getCart')
             .then(result => {
                setList(result.data);
                console.log(list);
             })
             .catch(error=>{
                console.log(error);
             })
    },[]);

    return(
        <div className="cart"> 
        <h2>CART LIST</h2>
        <br/>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>상품명</th>
                    <th>금액</th>
                    <th>수량</th>
                    <th>총 금액</th>
                </tr>
            </thead>
            <tbody>
                {/* {stock.map((itemS)=>(
                        <tr>{itemS}</tr>
                ))} */}
                {list.map((itemC,i)=>(
                    <tr>
                        <td>{itemC.id}</td>
                        <td>{itemC.title}</td>
                        {/* <td>{itemC.price}</td> */}
                        <td>{itemC.count}</td>
                        {/* <td>{itemC.price*itemC.count}</td> */}
                        
                    </tr>
                ))}
{/* 
                <tr><td>교수님이 만든 버전</td></tr>
                 {cartP.map((item, i) => (
                        <tr>
                            <td>{item.id}</td>
                             <td>{item.title}</td> 
                             <td>{item.price}</td> 
                            <td>{item.count}</td>
                            
                        </tr>
                ))}  */}
            </tbody>
        </Table>
    </div>    
    )
}

export default Cart;

// [
// {id:0, title:'pants1', count:2},
// {id:2, title:'shirts1', count:1}
// ]
