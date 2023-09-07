import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function RooteRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}
