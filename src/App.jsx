import React from "react";
import { Routes, Route } from "react-router-dom";
import SimpleFooter from "./pages/Footer";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Services from "./pages/Services";
import Register from "./pages/Register";
import Help from "./pages/Help";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="register" element={<Register />} />
        <Route path="help" element={<Help />} />
      </Routes>
      <SimpleFooter />
    </>
  );
}
