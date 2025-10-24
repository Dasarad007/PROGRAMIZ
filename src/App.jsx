import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Signup from "./signup";
import Login from "./login";
import Javascript from "./javascript";
import Python from "./python";
import Nav from "./nav";

function App() {
  return (
    <BrowserRouter>
      <Nav /> {/* Always shown */}
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/js" element={<Javascript />} />
        <Route path="/py" element={<Python />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
