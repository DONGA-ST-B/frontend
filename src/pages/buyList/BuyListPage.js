import React from "react";
import BuyListButtonGroup from "../buyList/BuyListButtonGroup";

export default function BuyListPage() {
  const buttons = ["전체", "기기 본체", "추가 용품", "추가 서비스"];

  return (
    <div>
      <BuyListButtonGroup buttons={buttons} />
    </div>
  );
}
