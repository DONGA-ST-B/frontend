import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProductContainer from "../product/ProductContainer"

export default function ProductDetailPage() {
  return (
    <div>
      <Header />
      <div>
        <ProductContainer />
      </div>
      <Footer />
    </div>
  );
}