import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "동작구 파전 맛집"; // 서버에서 가져온 데이터
  let [title, titleChange] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "리액트 독학",
  ]);
  let [thumb, setThumb] = useState([0, 0, 0]); // 두 번째 변수 : state 변경용 함수
  let [modal, setModal] = useState(false);

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
          titleChange(copy);
        }}
      >
        가나다순 정렬
      </button>
      {/* <div className="list">
        <h4>
          {title[0]}
          <span
            onClick={() => {
              thumbChange(thumb + 1);
            }}
          >
            {" "}
            👍
          </span>{" "}
          {thumb}{" "}
          <button
            onClick={() => {
              let copy = [...title];
              // array 자료변경시 다른 변수 만들어서 카피본 생성(원본 보존)
              // ... : 괄호 벗기기 -> [...변수] : 독립적인 array 복사본 생성
              copy[0] = "여자 코트 추천";
              titleChange(copy);
            }}
          >
            👩
          </button>
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            if (modal == false) {
              setModal(true);
            } else setModal(false);
          }}
        >
          {title[1]}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      {
        modal == true ? <Modal /> : null // 삼항연산자 : 조건식 ? true : false
      } 
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {/* map()으로 반복되는 <div> 줄이기 */}
      {title.map(function (a, i) {
        return (
          <div className="list">
            <h4>
              {a}{" "}
              {/* 좋아요 버튼을 누를 때 마다 각각 개별적으로 증가되게 하기 */}
              <span
                onClick={() => {
                  let copy = [...thumb];
                  copy[i]++;
                  setThumb(copy);
                }}
              >
                👍
              </span>
              {thumb[i]}
            </h4>
            {/* == title[i] */}
            <p>2월 18일 발행</p>
          </div>
        );
      })}
    </div>
  );
}

// 컴포넌트 만드는 법
function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
