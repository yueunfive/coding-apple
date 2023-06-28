import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function Event() {
  let navigate = useNavigate();

  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <button
        onClick={() => {
          navigate("/event/service");
        }}
      >
        서비스
      </button>
      <button
        onClick={() => {
          navigate("/event/coupon");
        }}
      >
        쿠폰
      </button>
      <Outlet></Outlet>
    </div>
  );
}

export default Event;
