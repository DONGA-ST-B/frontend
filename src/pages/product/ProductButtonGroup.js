import React, { useState } from "react";
import axios from "axios";
import { COLORS } from "../../styles/colors";
import LikeFalse from "../../assets/BuyLike.png";
import LikeTrue from "../../assets/LikeHearTrue.png";

const ProductButtonGroup = ({ productId }) => {
  const [message] = useState(""); 
  const [isLiked, setIsLiked] = useState(false); 

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

  const handleCartButtonClick = () => {
    const requestBody = {
      productId: productId, 
      memberId: 1, 
    };

    axios
      .post("https://www.kusitms28.shop/api/cart/add", requestBody)
      .then((response) => {
        if (response.data.isSuccess) {
          alert("장바구니에 제품 추가를 완료했습니다.");
        } else {
          alert("제품이 이미 장바구니에 있습니다.");
        }
      })
      .catch((error) => {
        console.error("API 요청 중 에러 발생:", error);
      });
  };

  const handleLikeButtonClick = () => {
    setIsLiked(!isLiked); 
  };

  return (
    <div style={buttonGroupStyle}>
      <div style={likeButtonStyle} onClick={handleLikeButtonClick}></div>
      <button style={buyButtonStyle} onClick={handleBuyButtonClick}>
        구매하기
      </button>
      <button style={cartButtonStyle} onClick={handleCartButtonClick}>
        장바구니 추가
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ProductButtonGroup;
