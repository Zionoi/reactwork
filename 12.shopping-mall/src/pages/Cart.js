import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

//변경시 2.
// import { changeName, ldl, increase} from '../store/store';
// userSlice로 분할 후 import
import { changeName,lel, increase, countUp} from '../store/userSlice';
// 위에 reducers changeName을 사용하려면 해당 컴포넌트에 요청을 해야함

function Cart(){

    // Redux(즉 여기선 store.js)의 상태(key)를 가져오기 위해 사용하는 코드
    let state = useSelector((state) => state)
    let state2 = useSelector(state=>state.member) // 원하는것만 가져오기
    console.log(state);
    console.log(state.user);
    let stock = useSelector(state => state.stock)
    // let cart = useSelector(state => state.cart)
    let cart = useSelector(state => state.addCartList)
    let pList = useSelector(state => state.pList)

    // console.log("pList",pList);

    // 변경시 2. store.js에 요청을 보내는 함수
    let dispatch = useDispatch();


    return(
        <div className="cart">     
         {/* 보낸 데이터 한개일때 */}
        {/* <h2>{state.member}님의 CART LIST</h2> */}
        {/*  */}
        <h2>{state.member.name}님의 CART LIST</h2>
        <br/>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>상품명</th>
                    <th>금액</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                {/* {stock.map((itemS)=>(
                        <tr>{itemS}</tr>
                ))} */}
                {cart.map((itemC)=>(
                    <tr>
                        <td>{itemC.id}</td>
                        <td>{itemC.title}</td>
                        <td>{itemC.id}</td>
                        <td>{itemC.count}</td>
                        <td>
                            <button variant="info" onClick={() => {
                                dispatch(changeName())
                            }}>
                                변경1
                            </button>
                            <button variant="info" onClick={() => {
                                dispatch(countUp())
                            }}>
                                +
                            </button>
                            
                            {/* <button variant="info" onClick={() => {
                                dispatch(ldl())
                            }}>
                                변경2
                            </button> */}
                        </td>
                    </tr>
                ))}
                {/* {pList.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.count || 'N/A'}</td>
                            <td>@mdo</td>
                        </tr>
                ))} */}
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
