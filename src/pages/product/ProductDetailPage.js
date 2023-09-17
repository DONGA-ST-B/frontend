import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProductContainer from "./ProductContainer";
import SecondHeader from "../../components/header/SecondHeader";

export default function ProductDetailPage() {
  const { productId } = useParams();

  return (
    <div>
      <SecondHeader />
      <div>
        <ProductContainer productId={productId} />
      </div>
      <Footer />
    </div>
  );
}
