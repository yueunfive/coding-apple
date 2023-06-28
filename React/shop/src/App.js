import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Cart from "./components/Cart";
import Event from "./components/Event";
import data from "./data.js";
import React, { useEffect, useState, createContext } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  useEffect(() => {
    // localStorage에 watched 항목이 있으면 [] 새로 넣지 말라고 하기.
    // -> watched 항목이 없을 떄만 [] 새로 넣기
    if (localStorage.getItem("watched" === null)) {
      localStorage.setItem("watched", JSON.stringify([]));
    }
  }, []);

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shoe Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail/1");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/event");
              }}
            >
              Event
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home shoes={shoes} setShoes={setShoes} />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/event" element={<Event />}>
          <Route path="service" element={<div>첫 주문 양배추즙 서비스</div>} />
          <Route path="coupon" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
