import React from "react";
import ReactDOM from "react-dom";
import Home from "../pages/Home";
import Submitted from "../pages/Submitted";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/submitted" element={<Submitted />} />
    </Routes>
  );
}

export default App;
