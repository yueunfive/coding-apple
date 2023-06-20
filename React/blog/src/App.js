import "./App.css";
import { useState } from "react";

function App() {
  let post = "동작구 파전 맛집"; // 서버에서 가져온 데이터(라고 치자..)
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "리액트 독학",
  ]);
  let [num, setNum] = useState(0);
  let [thumb, setThumb] = useState([0, 0, 0]); // 두 번째 변수(set~~) : state 변경용 함수
  let [modal, setModal] = useState([false]);
  let [input, setInput] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "grey", fontSize: "16px" }}>블로그</h4>
      </div>
      <h4>{post}</h4>
      {/* 가나다순 정렬버튼과 기능 만들기 */}
      <button
        onClick={() => {
          let copy = [...title].sort();
          setTitle(copy);
        }}
      >
        가나다순 정렬
      </button>
      {/* map()으로 반복되는 <div> 줄이기 */}
      {title.map(function (a, i) {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal(true);
                setNum(i);
              }}
            >
              {a}
              {/* == title[i] */}{" "}
              {/* 좋아요 버튼을 누를 때 마다 각각 개별적으로 증가되게 하기 */}
              <span
                onClick={(e) => {
                  e.stopPropagation(); // 상위 html로 퍼지는 이벤트버블링 막기
                  let copy = [...thumb];
                  copy[i]++;
                  setThumb(copy);
                }}
              >
                👍
              </span>
              {thumb[i]}
            </h4>
            <p>2월 18일 발행</p>
            {/* 글마다 삭제 버튼 기능 */}
            <button
              onClick={() => {
                let copy = [...title];
                copy.splice(i, 1); // 배열 a번째 항목부터 b개 제거
                setTitle(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      {
        modal == true ? (
          <Modal color="skyblue" title={title} setTitle={setTitle} num={num} />
        ) : null // 삼항연산자 : 조건식 ? true : false
      }
      {/* state로 사용자가 input에 입력한 데이터 저장하기 */}
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      {/* 글발행기능 */}
      <button
        onClick={() => {
          let copy = [...title];
          copy.unshift(input); // unshift : 배열 맨 앞에 요소 추가
          setTitle(copy);
        }}
      >
        글 발행
      </button>
    </div>
  );
}

// 컴포넌트 만드는 법
function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.title[props.num]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.title];
          copy[0] = "여자 코트 추천";
          props.setTitle(copy);
        }}
      >
        👩
      </button>
    </div>
  );
}

export default App;
