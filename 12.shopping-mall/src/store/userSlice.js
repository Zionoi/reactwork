import { createSlice } from "@reduxjs/toolkit";

// store redux를 분할해서 사용 예제
// userSlice를 store에 임폴트하기위해 export default user;를 아래 추가해야함

let user = createSlice({
    name : 'user1',
    initialState : {name : 'kim', age : 20},
    reducers : {
                // 리듀서 사용시 기존에 있는값 필요없으면 매개변수 생략 가능
        // changeName(){
        //     return {name : 'park', age : 20}
        // }
        changeName(state){
            state.name = 'park';
        },
            // 두번째 파라미터(num)는 해당 함수 호출하면서 넘겨준 값
        increase(state, num) {
            state.age += num.payload;
        },
        countUp(state){
            state.count++;
        }

    }
})
export let { changeName, increase, countUp} = user.actions
export default user; // user까지 같이 익스포트해야함




/*
// 객체나 배열 변경
let user = createSlice({
    name : 'user1',
    initialState : {name : 'kim', age : 20},
    reducers : {
                // 리듀서 사용시 기존에 있는값 필요없으면 매개변수 생략 가능
        // changeName(){
        //     return {name : 'park', age : 20}
        // }
        changeName(state){
            state.name = 'park';
        },
        increase(state) {
            state.age = state.age + 1;
        }
    }
})
export let { changeName, increase} = user.actions
*/

/*
//넘기는값이 하나일때      //createSlice는({}) 고정
let user = createSlice({
    name : 'user1',   // 키에 해당 name에서 설정한 키로 호출
    initialState : 'kim',    // 값에 해당
            //값을 변경할땐 reducers 사용
    reducers : {
        changeName(){
            return 'jiwon kim'
        },
        // 여러개 있을땐 이렇게 추가 해주면됨. export, import에도 ',' 구분

        // 기존에 있는값 넣어줄땐 매개변수로 넣어준다 여기서는 state로 넣어줌
        ldl(state) {
            return 'jiwon'+ state
        }
    }   
})
export let { changeName, ldl } = user.actions
*/