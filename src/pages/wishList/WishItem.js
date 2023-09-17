import React, { useState, useEffect } from "react";
import axios from "axios";
import { COLORS } from "../../styles/colors";
import MinusButton from "../../assets/MinusButton.png";
import PlusButton from "../../assets/PlusButton.png";
import WishPrice from "./WishPrice";
import styled from "styled-components";

const WishItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const wishItemStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "24px",
    // marginTop: "10px",
    paddingBottom: "24px",
    width: "700px",
    borderBottom: "1px solid #d3d3d3",
  };

  const imageStyle = {
    width: "110px",
    height: "110px",
    marginRight: "40px",
  };

  const textBoxStyle = {
    flex: 1,
  };

  const iconGroupStyle = {
    display: "flex",
    alignItems: "left",
    marginTop: "20px",
    alignItems: "center",
  };

  const iconStyle = {
    width: "30px",
    height: "30px",
    color: COLORS.BLACK,
    cursor: "pointer",
    margin: "8px",
  };

  const productNameStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: COLORS.GRAY_900,
  };

  const optionNameStyle = {
    fontSize: "16px",
    color: COLORS.GRAY_500,
  };

  const quantityStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: COLORS.BLACK,
    alignItems: "center",
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div style={wishItemStyle}>
      <img style={imageStyle} src={item.product.photoUrl} alt="Product" />
      <div style={textBoxStyle}>
        <div style={productNameStyle}>{item.product.productName}</div>
        <div style={optionNameStyle}>{item.product.optionName}</div>
        <div style={iconGroupStyle}>
          <img
            onClick={handleDecrease}
            style={iconStyle}
            src={MinusButton}
            alt="Minus"
          />
          <span style={quantityStyle}>{quantity}</span>
          <img
            onClick={handleIncrease}
            style={iconStyle}
            src={PlusButton}
            alt="Plus"
          />
        </div>
      </div>
      <PriceTag>{item.product.price}원</PriceTag>
      <OrderButton>주문하기</OrderButton>
    </div>
  );
};

const OrderButton = styled.div`
  width: 80px;
  height: 30px;
  border-radius: 8px;
  background-color: #08b9df;
  color: white;
  font-size: 12px; // 텍스트 크기 조정
  font-weight: bold; // 텍스트 굵기 조정
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 10px;
`;

const WishListPage = () => {
  const [cartData, setCartData] = useState(null);

  //   const fetchCartData = async () => {
  //     await axios
  //       .get("https://www.kusitms28.shop/api/cart/1")
  //       .then((response) => {
  //         console.log("Res.data:", response.data);
  //         setCartData(response.data);
  //       })
  //       .catch((error) => {
  //         console.error("API 요청 중 에러 발생:", error);
  //       });
  //   };
  const id = 1;

  useEffect(() => {
    console.log("id:", id);
    const fetchCartData = async () => {
      try {
        const res = await axios.get(`https://www.kusitms28.shop/api/cart`);
        console.log("성공", res.data);
        setCartData(res.data);

        const apiData = res.data.data;
      } catch (err) {
        console.error("err:", err);
      }
    };
    fetchCartData();
  }, []);

  return (
    <div>
      {cartData &&
        cartData.cartItems.map((item) => (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <WishItem key={item.id} item={item} />
            {/* <WishPrice /> */}
          </div>
        ))}
    </div>
  );
};

const PriceTag = styled.div`
  color: var(--gray-900, #15191d);

  /* H3_B */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 32px */
`;

export default WishListPage;
