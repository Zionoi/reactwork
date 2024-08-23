import './App.css';
import { useState } from 'react';



function App() {
  const [count, setCount] = useState([0,0,0,0,0,0,0])
  let [title, setTitle] = useState([["초밥"],["찬란한 아구"],["역전우동"]]);
  let [modal,setModal] = useState(false);  // 모달창 보이거나 안보이게 해주는 트리거
  let [modalIndex, setModalIndex] = useState(0); // 제목 클릭하면 어떤 제목 클릭해주는지 알려주는 인덱스 변호/ div의 index번호를 받아서 넘겨주는 역할 [0,1,2]
  let [inputValue, setInputValue] = useState("");
  return (
    <div className="App">
        <h2 className="title">맛집 추천 INSTAR</h2>
       

          {
            // map : 배열의 각 요소별로 작업한 후 요소를 담은 배열 반환
            // filter : 각 요소별 콜백함수를 실행하여 true인 요소만 새 배열에 담아 반환
            // 배열.splice(시작인덱스, 제거할 수, 추가할 값, ...) : 배열의 요소 추출하여 제거 및 추가 반환값은 제거된 요소들
            
            title.map(function(value,index,arr) {
              return (
                                // 고유한 키값을 넣어워야 워닝이 안뜸
                <div className="list" key={index}>
                  <h4 onClick={()=>{setModal(!modal); setModalIndex(index)}} style={{cursor:"pointer"}}>{value}</h4>
                  <button onClick={()=>{
                    let copyTitle = [...title];
                    let copyCount = [...count];
                    copyTitle.splice(index,1);
                    copyCount.splice(index,1);
                    setTitle(copyTitle);
                    setCount(copyCount);
                  }}> X </button>
                  
                  {/* <button onClick={Delete(index, title, inputValue,setTitle,setCount)}> X </button> */}

                  <p>8월 22일 <span onClick={()=>{
                    let countCopy = [...count];
                    countCopy[index]=countCopy[index]+1;
                    setCount(countCopy);
                    }}>🤔</span>{count[index]}</p>
                  
                </div>
              )
            })
            // // 2차원 배열은 useState에서 사용할수 없다
            // title.map(function(value,index,arr) {
            //   return (
            //     <div className="list">
            //       <h4 onClick={()=>{setModal(true)}} style={{cursor:"pointer"}}>{value}</h4>
            //       <p>8월 22일 <span onClick={()=>{setTitle(title[index][1]+1)}}>🤔</span>{title[index][1]}</p>
            //     </div>
            //   )
            // })
            
          }
          
        <input onChange={(e)=>{setInputValue(e.target.value)}}/>
        <button onClick={()=>{
          let titleCopy=[...title];
          let countCopy=[...count];
          titleCopy.unshift(inputValue);
          countCopy.unshift(0);

          setTitle(titleCopy);
          setCount(countCopy);
        }}>추 가</button>
        
        
                      {/*  가게이름 'title' 과 어떤가게인지 'modalIndex' 인덱스 번호 넘겨줌 */}
        {modal ? <Modal title={title} modalIndex={modalIndex} setTitle={setTitle}/> : null }
    </div>
  );
}

function Modal({title, modalIndex, setTitle}) {
    // 입력값을 관리할 state 추가
    const [inputValue, setInputValue] = useState('');
  return (
    <div className="modal">
      <h4>{title[modalIndex]}</h4>
      <p>날짜</p>
      <p>상세내용</p>

      {/*원본이 바뀜 */}
        {/* <button onClick={()=>{setTitle(["청담등심","찬란한 아구","역전우동"]);}}>글수정</button> */}

        <button onClick={()=>{
          let copy = [...title]; // 풀어서 넣지않으면 값이 바껴도 주소가 그대로이기때문에 재랜더링이 안됨. 
          copy[modalIndex] = <input></input>;
          setTitle(copy);
          
          }}>글 수정</button>
    </div>
    //////////
  //   <div className="modal">
  //   <h4>{title[modalIndex]}</h4>
  //   <p>날짜</p>
  //   <p>상세내용</p>

  //   {/* 사용자 입력을 위한 input 필드 */}
  //   <input
  //     type="text"
  //     value={inputValue}
  //     onChange={(e) => setInputValue(e.target.value)} // 입력값을 state에 저장
  //   />

  //   {/* 입력값으로 title 수정 */}
  //   <button
  //     onClick={() => {
  //       let copy = [...title]; // title 배열 복사
  //       copy[modalIndex] = inputValue; // 해당 인덱스에 입력값 설정
  //       setTitle(copy); // 변경된 배열로 state 업데이트
  //     }}
  //   >
  //     글 수정
  //   </button>
  // </div>
  
  

  )
}

// function Delete(index){
//   let titleCopy=[...title];
//   let countCopy=[...count];
//   titleCopy.unshift(inputValue);
//   countCopy.unshift(0);

//   setTitle(titleCopy);
//   setCount(countCopy);
// }

export default App;
