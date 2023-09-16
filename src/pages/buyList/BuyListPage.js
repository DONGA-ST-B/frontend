import React, { useState } from "react";
import BuyListButtonGroup from "../buyList/BuyListButtonGroup";
import BuyBanner from "./BuyBanner";
import Footer from "../../components/footer/Footer";
import BuyList from "./BuyList";
import Header from "../../components/header/Header";

export default function BuyListPage() {
  const buttons = ["전체", "기기 본체", "추가 용품", "추가 서비스"];

  const [category, setCategory] = useState("TOTAL");

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div>
      <Header />
      <div style={{ marginBottom: "40px" }}>
        <BuyBanner />
      </div>
      <div style={{ marginBottom: "50px" }}>
        <BuyListButtonGroup
          buttons={buttons}
          selectedCategory={category}
          onCategoryChange={handleCategoryChange}
        />
      </div>
      <div style={{ marginBottom: "100px" }}>
        <BuyList category={category} onCategoryChange={handleCategoryChange} />
      </div>
      <Footer />
    </div>
  );
}
