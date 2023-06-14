import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./DetailPage.module.css";

export default function DetailPage(props) {
  let { id } = useParams(); // 유저가 입력한 url파라미터 가져옴
  let [count, setCount] = useState(0);
  let [timer, setTimer] = useState(true);
  let [num, setNum] = useState("");
  useEffect(() => {
    //여기적은 코드는 컴포넌트 로드 & 업데이트 마다 실행됨
    let a = setTimeout(() => {
      // setTimeout() : 타이머 함수
      setTimer(false);
    }, 2000);
    return () => {
      clearTimeout(a); // 기존 타이머 제거 (청소용)
    };
  }, []);
  useEffect(() => {
    if (isNaN(num) == true) {
      // isNaN() : 숫자 판별 함수, Not a Number로 false여야 숫자이다.
      alert("숫자만 입력해주세요");
    }
  }, [num]);

  return (
    <div className="container">
      {timer == true ? (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null}
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      <div className="row">
        <div className="col-md-6">
          <img
            src={"https://codingapple1.github.io/shop/shoes1.jpg"}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <input
            onChange={(e) => {
              setNum(e.target.value);
            }}
          />
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[0].content}</p>
          <p>{props.shoes[0].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
