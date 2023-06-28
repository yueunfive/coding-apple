import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../store/store";

export default function Detail(props) {
  let { id } = useParams(); // 유저가 입력한 url파라미터 가져옴 => http://localhost:3000/detail/"1"
  let findItem = props.shoes.find((x) => x.id == id);
  let [timer, setTimer] = useState(true);
  let [tab, setTab] = useState(0);
  let [fade2, setFade2] = useState("");
  
  // 2초 후에 타이머 제거 
  // setTimeout() : 타이머 함수
  // clearTimeout() : 기존 타이머 제거 (청소용)
  useEffect(() => {
    let a = setTimeout(() => {setTimer(false)}, 2000) // 
    return () => {clearTimeout(a)}; 
  }, []);
  
  // 컨포넌트 전환 애니메이션(transition) -> 창 
  useEffect(() => {
    setTimeout(() => {setFade2("end")}, 100);
    return () => {setFade2("")};
  }, []);

  // localStorage에 저장된 배열에 새로운 값을 추가
  // 1.localStorage에서 배열을 가져오기
  // 2.가져온 배열에 새로운 값을 추가
  // 중복제거 : watched가 findItem.id을 포함하지 않을 경우에만 watched 배열에 findItem.id 추가
  // 3.변경된 배열을 localStorage에 다시 저장
  useEffect(() => {
    const watched = JSON.parse(localStorage.getItem("watched")); 
    if (!watched.includes(findItem.id)) {
      watched.push(findItem.id);
    }
    localStorage.setItem("watched", JSON.stringify(watched));
  }, []); 

  // Redux store에 있던 state 남음
  let a = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  return (
    <div className={"container start " + fade2}>
      {timer == true ? (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img
            // 변수 id는 문자열(string)이라 숫자 타입으로 변환해줘야 함.
            src={`https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(addItem({ id: 1, name: "Red Knit", count: 1 }));
            }}>
            장바구니
          </button>
        </div>
      </div>
      {/* 탭 UI */}
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {setTab(0)}}
            eventKey="link0">
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {setTab(1)}}
            eventKey="link1">
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {setTab(2)}}
            eventKey="link2">
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
}

// 컨포넌트 전환 애니메이션(transition) -> 탭
// props 대신에 그냥 tab 박아버린거 (1개니까)
function TabContent({ tab }) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {setFade("end")}, 100);
    return () => {setFade("")};
  }, [tab]);

  return (
    <div className={"start " + fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
}
