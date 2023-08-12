import React from "react";
import { Col } from "react-bootstrap";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import Detail from "./components/pages/detail";
import Login from "./components/login";

function App() {
  return (
    <Col style={{ height: "100vh", width: "100%" }}>
      <Navbar />
      <Col className="my-5">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/detail" element={<Detail />} />
        </Routes>
      </Col>
    </Col>
  );
}

export default App;
