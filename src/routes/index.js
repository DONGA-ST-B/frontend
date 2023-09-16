import React, { useState } from "react";
import BuyListPage from "../pages/buyList/BuyListPage";
import ProductDetailPage from "../pages/product/ProductDetailPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MonitoringPage from "../pages/monitoring/MonitoringPage";
import HolterPage from "../pages/holter/HolterPage";
import LoginPage from "../pages/login/LoginPage";
import MainPage from "../pages/main/MainPage";
import SearchPage from "../search/SearchPage";
import ArticleSearch from "../search/ArticleSearch";
import ArticlePage from "../search/ArticlePage";
import GoogleLogin from "../pages/login/GoogleLogin";

export default function RootRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/monitoring-solution" element={<MonitoringPage />} />
        <Route path="/buy-list" element={<BuyListPage />} />
        <Route path="/holter-solution" element={<HolterPage />} />
        <Route path="/product-detail/0" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/search" element={<SearchPage />} />
        <Route path="/search/article" element={<ArticlePage />} />
        <Route path="/google-login" element={<GoogleLogin />} />
      </Routes>
    </BrowserRouter>
  );
}
