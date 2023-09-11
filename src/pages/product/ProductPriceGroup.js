import React from "react";
import { COLORS } from "../../styles/colors";

const ProductPriceGroup = () => {
  const componentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    marginTop: "40px", // 상품 옵션과의 여백
  };

  const priceTextStyle = {
    fontSize: "B1",
    color: COLORS.GRAY_900,
    textAlign: "left",
    marginBottom: "16px", // 텍스트 아래 여백
  };

  const priceValueStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: COLORS.GRAY_900,
  };

  return (
    <div style={componentStyle}>
      <div style={priceTextStyle}>
        총 상품 금액: <span style={priceValueStyle}>0원</span>
      </div>
    </div>
  );
};

export default ProductPriceGroup;
