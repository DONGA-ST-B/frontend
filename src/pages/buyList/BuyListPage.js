import React from "react";
import BuyListButtonGroup from "../buyList/BuyListButtonGroup";
import BuyBanner from "./BuyBanner";
import Footer from "../../components/footer/Footer";

export default function BuyListPage() {
  const buttons = ["전체", "기기 본체", "추가 용품", "추가 서비스"];

  return (
    <div>
      <div style={{ marginBottom: "40px" }}> {/* Banner와의 아래 여백 설정 */}
        <BuyBanner />
      </div>
      <div style={{ marginBottom: "50px" }}> {/* BuyListButtonGroup와의 아래 여백 설정 */}
        <BuyListButtonGroup buttons={buttons} />
      </div>
      <Footer />
    </div>
  );
}
