import { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(1);
    const count2 = 1;
    return (
        <>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count+count2)}}>+</button>&emsp;
            <button onClick={()=>{setCount(count-count2)}}>-</button>
{/*         
            // 이렇게 쓰면 오류뜸 된다고하더라도 한번 클릭할때마다 새로고침해야 변경값이 보임
            <h1>{count2}</h1>
            <button onClick={count2=count2+1}>+</button>&emsp;
            <button onClick={count2=count2-1}>-</button>
            <hr></hr> */}
        
        </>

    )
}

export default Counter;