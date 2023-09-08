import React from "react";
import Header from "../components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MonitoringPage from "../pages/monitoring/MonitoringPage";

export default function RooteRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/monitoring-solution" element={<MonitoringPage />} />
      </Routes>
    </BrowserRouter>
  );
}
