import React from "react";
import { COLORS } from "../../styles/colors";

const ProductButtonGroup = () => {
  const buttonGroupStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "40px", // 버튼 그룹과의 여백
  };

  const buttonStyle = {
    width: "260px",
    height: "58px",
    borderRadius: "40px",
    fontSize: "B2",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const likeButtonStyle = {
    ...buttonStyle,
    backgroundImage: "url('/like-icon.png')", // 좋아요 아이콘 이미지 경로
    backgroundSize: "cover",
    marginRight: "16px", // 첫 번째 버튼과의 여백
  };

  const buyButtonStyle = {
    ...buttonStyle,
    color: "white",
    backgroundColor: "#08B9DF",
  };

  const cartButtonStyle = {
    ...buttonStyle,
    border: "1px solid #E0E0E0",
    color: COLORS.GRAY_900,
    borderColor: COLORS.GRAY_400,
  };

  return (
    <div style={buttonGroupStyle}>
      <div style={likeButtonStyle}></div>
      <button style={buyButtonStyle}>구매하기</button>
      <button style={cartButtonStyle}>장바구니 추가</button>
    </div>
  );
};

export default ProductButtonGroup;
