import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "동작구 파전 맛집"; // 서버에서 가져온 데이터
  let [a, b] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬 독학"]);
  let [thumb, thumbChange] = useState(0); // 두 번째 변수 : state 변경용 함수
  let [coat, coatWomen] = useState(a[0]);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "16px" }}>블로그</h4>
      </div>
      <div className="list">
        <h4>
          {a[0]}
          <span
            onClick={() => {
              thumbChange(thumb + 1);
            }}
          >
            👍
          </span>
          {thumb}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{a[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{a[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
