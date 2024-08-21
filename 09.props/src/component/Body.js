/*
// 1. 부모로부터 변수에 담긴 값 넘겨 받기
const Body = (props) =>{
    // 부모에게서 받은 데이터를 매개변수 props로 받음. 변수명은 자유롭게
    return (
        <>
            
                <h1>바디영역</h1>
                <p>{props.키_내맘대로변수명}</p>
                <p>{props.user}</p>
            
        </>
    )
}
*/
/*
// 2.1 부모로부터 객체형태로 넘겨준 값 받기
const Body = (props) =>{
    return (
        <>
        <h1>바디영역</h1>
        <p>{props.userInfo.name}님은 {props.userInfo.addr}에 살고 있습니다</p>
        <p>내가 좋아하는 것들은{props.userInfo.likeList}의 {props.userInfo.likeList.length}개를 좋아합니다.</p>
        <p>그 중에서 가장 좋아하는것은 {props.userInfo.likeList[1]}입니다.</p>
        </>
    )
}
*/
/*
// 2.2 부모로부터 객체형태의 값을 풀어서 넘겨준 값 받기(객체 분해 할당 사용)
const Body = ({name, addr, likeList}) =>{
                //부모 페이지에서 ...userInfo 로 풀어서 값을 넘겨주면 해당 키 이름 그대로 매개변수로 넣어줘서 값 받기
    return (
        <>
        <h1>바디영역</h1>
        <p>{name}님은 {addr}에 살고 있습니다</p>
        <p>내가 좋아하는 것들은{likeList}의 {likeList.length}개를 좋아합니다.</p>
        <p>그 중에서 가장 좋아하는것은 {likeList[1]}입니다.</p>
        </>
    )
}
*/

import Button from "./Button";

const Body = () =>{
    function btnClick (e) {
        alert("버튼 누르지마");
        console.log(e);
    }
    const btnProps = {
        text : "1번 ",
        color : "pink",
        a:'black',
        b:2,
        c:3
    }
    return(
        <>
            <h3>본문입니다</h3>
            <button onClick={btnClick} name="A버튼">A이벤트 버튼</button><br></br>
            <button onClick={btnClick} name="B버튼">B이벤트 버튼</button><br></br>
            <Button {...btnProps}/> <br></br>
            <Button></Button>
        </>
    )
}


export default Body;