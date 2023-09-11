import React, { useState } from "react";
import { COLORS } from "../../styles/colors";
import LikeFalse from "../../assets/BuyLike.png"; 
import LikeTrue from "../../assets/LikeHearTrue.png"

const ProductButtonGroup = () => {
  const [message] = useState(""); // 메시지 상태 추가
  const [isLiked, setIsLiked] = useState(false); // 좋아요 상태를 나타내는 상태 추가

  const buttonGroupStyle = {
    display: "flex",
    alignItems: "center",
    marginTop: "40px",
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
    width: "58px",
    height: "58px", 
    backgroundImage: `url(${isLiked ? LikeTrue : LikeFalse})`,
    backgroundSize: "cover",
    marginRight: "16px",
    cursor: "pointer",
  };

  const buyButtonStyle = {
    ...buttonStyle,
    color: "white",
    border: "none",
    backgroundColor: "#08B9DF",
    marginRight: "16px",
    cursor: "pointer", 
  };

  const cartButtonStyle = {
    ...buttonStyle,
    border: "1px solid #E0E0E0",
    backgroundColor: COLORS.WHITE,
    color: COLORS.GRAY_900,
    borderColor: COLORS.GRAY_400,
    cursor: "pointer", 
  };

  const handleBuyButtonClick = () => {
    alert("구매하기!");
  };

  // 장바구니 추가 버튼 클릭 이벤트 핸들러
  const handleCartButtonClick = () => {
    alert("장바구니에 추가하였습니다.");
  };

  // 좋아요 버튼 클릭 이벤트 핸들러
  const handleLikeButtonClick = () => {
    setIsLiked(!isLiked); // 좋아요 상태 변경
  };

  return (
    <div style={buttonGroupStyle}>
      <div style={likeButtonStyle} onClick={handleLikeButtonClick}></div>
      <button style={buyButtonStyle} onClick={handleBuyButtonClick}>구매하기</button>
      <button style={cartButtonStyle} onClick={handleCartButtonClick}>장바구니 추가</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ProductButtonGroup;
