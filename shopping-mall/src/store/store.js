import {configureStore, createSlice} from '@reduxjs/toolkit'
import pList from './../data/ProductList';
import user from './userSlice';



// let user = createSlice({
//     name : 'user1',
//     initialState : {name : 'kim', age : 20},
//     reducers : {
//                 // 리듀서 사용시 기존에 있는값 필요없으면 매개변수 생략 가능
//         // changeName(){
//         //     return {name : 'park', age : 20}
//         // }
//         changeName(state){
//             state.name = 'park';
//         },
//             // 두번째 파라미터(num)는 해당 함수 호출하면서 넘겨준 값
//         increase(state, num) {
//             state.age += num.payload;
//         }
//     }
// })
// export let { changeName, increase} = user.actions
// /*
// // 객체나 배열 변경
// let user = createSlice({
//     name : 'user1',
//     initialState : {name : 'kim', age : 20},
//     reducers : {
//                 // 리듀서 사용시 기존에 있는값 필요없으면 매개변수 생략 가능
//         // changeName(){
//         //     return {name : 'park', age : 20}
//         // }
//         changeName(state){
//             state.name = 'park';
//         },
//         increase(state) {
//             state.age = state.age + 1;
//         }
//     }
// })
// export let { changeName, increase} = user.actions
// */

// /*
// //넘기는값이 하나일때      //createSlice는({}) 고정
// let user = createSlice({
//     name : 'user1',   // 키에 해당 name에서 설정한 키로 호출
//     initialState : 'kim',    // 값에 해당
//             //값을 변경할땐 reducers 사용
//     reducers : {
//         changeName(){
//             return 'jiwon kim'
//         },
//         // 여러개 있을땐 이렇게 추가 해주면됨. export, import에도 ',' 구분

//         // 기존에 있는값 넣어줄땐 매개변수로 넣어준다 여기서는 state로 넣어줌
//         ldl(state) {
//             return 'jiwon'+ state
//         }
//     }   
// })
// export let { changeName, ldl } = user.actions
// */

// 넘기는값이 여러개일때 (배열)
let stock = createSlice({
    name : 'stockaaaaaaaa여긴 그냥 있는거라고함 안씀 근데 써야함', 
    initialState : [10,11,12] 
})

// 장바구니에서 추가한 상품 리스트 업 (교수님이만든버전)
let cart = createSlice({
    name : 'product',
    initialState : [
    {id:0, title:'pants1', count:2},
    {id:2, title:'shirts1', count:1}
    ],
    reducers : {
        addCount(state, action){
            state[action].count++
        }
    }
})
export let {addCount} =cart.actions;

// 장바구니에서 추가한 상품 리스트 업 (내가만든버전)
let addCartList = createSlice({
    name : 'addCartList',
    initialState : [],
    reducers: {
        addToCart(state, action){
            // 상품 ID를 payload로 가져옴
            const newItem = action.payload;
            // 기존 장바구니에서 같은 ID를 가진 상품을 찾음
            const findItem = state.find(item => item.id === newItem.id);

            if(findItem){
                // 장바구니에 상품이 있으면 카운트 +1
                findItem.count+=1; // 상품이 있으면 카운트 +1
            }else {
                state.push({ ...newItem, count: 1 }); // 새 상품 추가
            }
        },
        countUp(state, action){
            let findId = state.findIndex(ind => ind.id == action.payload)
            state[findId].count++;
        }
    }
})
export let { addToCart, countUp } = addCartList.actions;

// 다른컴포넌트에서 데이터 넘겨받기
let product = createSlice({
    name : 'product',
    initialState : pList
})



// export할게 하나밖에없으면 함수명 앞에 이렇게 적어줘도 익스포트 됨.
export default configureStore({
    reducer : {
        // 내보내기에 등록. 키 : 값 형태
    //여긴변수명    : 여긴 위에 만든 createSlice는({}) 키 호출
        member : user.reducer,
    //다른컴포넌트에서 호출시 여기에 적어둔 키(member)로 호출
    
    // 넘기는값이 여러개일땐 위에 ',' 로 구분 
        stock : stock.reducer,

        cart : cart.reducer,

    // 다른컴포넌트에서 데이터 넘겨받기
        pList : product.reducer,

        addCartList : addCartList.reducer
    }
})