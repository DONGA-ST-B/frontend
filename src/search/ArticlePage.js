import React from "react";
import Header from "../components/header/Header";
import ProductSearch from "./ProductSearch";
import Footer from "../components/footer/Footer";
import ArticleSearch from "./ArticleSearch";

export default function ArticlePage() {
  return (
    <div>
      <Header />
      <ArticleSearch />
      <Footer />
    </div>
  );
}
