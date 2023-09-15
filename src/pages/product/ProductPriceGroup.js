import React, { useState } from "react";
import { COLORS } from "../../styles/colors";

const ProductPriceGroup = ({ selectedOptionPrice }) => {
  const totalProductPrice = selectedOptionPrice; // 총 상품 금액


  const componentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    marginTop: "40px",
  };

  const priceTextStyle = {
    fontSize: "B1",
    color: COLORS.GRAY_900,
    textAlign: "left",
    marginBottom: "16px",
  };

  const priceValueStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: COLORS.GRAY_900,
  };


  return (
    <div style={componentStyle}>
      <div style={priceTextStyle}>
        총 상품 금액: <span style={priceValueStyle}>{totalProductPrice}원</span>
      </div>
    </div>
  );
};

export default ProductPriceGroup;
