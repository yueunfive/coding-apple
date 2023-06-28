import axios from "axios";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import React, { useEffect, useState, createContext } from "react";

export default function Home(props) {
  let navigate = useNavigate();
  let [visible, setVisible] = useState(false);

  return (
    <div>
      <div className="main-bg">
        <p>최근 본 상품의 id : {localStorage.getItem("watched")}</p>
      </div>
      <div className="container">
        <div className="row">
          {props.shoes.map(function (a, i) {
            return (
              <div className="col-md-4">
                <img
                  src={
                    "https://codingapple1.github.io/shop/shoes" +
                    (i + 1) +
                    ".jpg"
                  }
                  width="80%"
                  onClick={() => {
                    navigate(`/detail/${i}`);
                  }}
                />
                <h4>{a.title}</h4>
                <p>{a.price}</p>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => {
            setVisible(!visible);
            if (!visible) {
              axios
                .get("https://codingapple1.github.io/shop/data2.json")
                // shoes에 데이터 몇 개 추가하기
                .then((result) => {
                  let copy = [...props.shoes, ...result.data];
                  props.setShoes(copy);
                })
                .catch(() => {
                  alert("ajax fail...");
                });
            } else {
              let copy = [...props.shoes].splice(3, 3);
              props.setShoes(copy);
            }
          }}
        >
          {visible ? "숨기기" : "더보기"}
        </button>
      </div>
    </div>
  );
}
