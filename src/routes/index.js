import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import BuyListPage from "../pages/buyList/BuyListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MonitoringPage from "../pages/monitoring/MonitoringPage";

export default function RooteRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/monitoring-solution" element={<MonitoringPage />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/buy-list" element={<BuyListPage />} />
      </Routes>
    </BrowserRouter>
  );
}
