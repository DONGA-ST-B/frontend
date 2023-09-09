import React from "react";
import BuyListButtonGroup from "../buyList/BuyListButtonGroup";
import BuyBanner from "./BuyBanner";
import Footer from "../../components/footer/Footer";
import BuyList from "./BuyList";
import Header from "../../components/header/Header";

export default function BuyListPage() {
  const buttons = ["전체", "기기 본체", "추가 용품", "추가 서비스"];

  return (
    <div>
      <Header />
      <div style={{ marginBottom: "40px" }}>
        <BuyBanner />
      </div>
      <div style={{ marginBottom: "50px" }}>
        <BuyListButtonGroup buttons={buttons} />
      </div>
      <div style={{ marginBottom: "100px" }}>
        <BuyList />
      </div>     
       <Footer />
    </div>
  );
}
