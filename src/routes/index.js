import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import BuyListPage from "../pages/buyList/BuyListPage";
import ProductDetail from "../pages/product/ProductDetailPage"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function RootRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/buy-list" element={<BuyListPage />} />
        <Route path="/product/:index" element={<ProductDetail />} /> {/* 추가 */}
      </Routes>
    </BrowserRouter>
  );
}
