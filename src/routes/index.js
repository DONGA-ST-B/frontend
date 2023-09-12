import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import BuyListPage from "../pages/buyList/BuyListPage";
import ProductDetailPage from "../pages/product/ProductDetailPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MonitoringPage from "../pages/monitoring/MonitoringPage";
import HolterPage from "../pages/holter/HolterPage";
import LoginPage from "../pages/login/LoginPage";

export default function RootRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/monitoring-solution" element={<MonitoringPage />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/buy-list" element={<BuyListPage />} />
        <Route path="/product/:index" element={<ProductDetailPage />} />{" "}
        <Route path="/holter-solution" element={<HolterPage />} />
        <Route path="/product-detail/0" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
