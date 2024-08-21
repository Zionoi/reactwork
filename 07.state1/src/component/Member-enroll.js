import { useState } from 'react';
const Member_enroll = () => {

    const [input, setInput] = useState({
        name : "",
        location : "",
        mylife : ""
    })  
            // 매개변수 e : 이벤트가 발생했을때 모든 정보가 e로 들어옴
    const onChange=(e) => {
        console.log(e.target.name + " : " + e.target.value)
        setInput({
            //... : 스프레드 연산자. 안에 값들을 풀어서 가져옴
            //      즉 새로운 객체로 만들어서 기존객체와 다른객체로 만들어주는것 
            //      재랜더링을 위한작업(리액트는 값(주소)가 바껴야 재랜더링이 되기때문)
            ...input,
            [e.target.name] : e.target.value
        })
    }
    return(
    <>
        <h1>회원가입</h1>
        이름 : <input name="name" onChange={onChange}/><br/><br/>
        생년월일 : <input type="date" name="birth" onChange={onChange}/><br/><br/>
        주소 : <select name="location" onChange={onChange}>
                <option value=" ">선택</option>
                <option value="seoul">서울특별시</option>
                <option value="incheon">인천광역시</option>
                <option value="busan">부산광역시</option>
                
        </select>
        <br></br>
        <br></br>
        <textarea name="mylife" onChange={onChange}/>
        

    </>
    )
}

export default Member_enroll;