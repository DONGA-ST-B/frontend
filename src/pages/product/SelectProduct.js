import React, { useState } from "react";
import { COLORS } from "../../styles/colors";
import MinusButton from "../../assets/MinusButton.png";
import PlusButton from "../../assets/PlusButton.png";

const SelectProduct = ({ onPriceIncrease }) => { // onPriceIncrease 함수를 props로 받음
  const [quantity, setQuantity] = useState(1);


  const newComponentStyle = {
    width: "90%",
    height: "140px",
    borderRadius: "20px",
    backgroundColor: "#F4F8FD",
    marginTop: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 16px",
  };

  const leftTextStyle = {
    fontSize: "20px",
    color: COLORS.GRAY_900,
    fontWeight: "bold",
    marginLeft: "16px",
  };

  const optionTextStyle = {
    fontSize: "16px",
    color: COLORS.GRAY_900,
    marginLeft: "16px",
  };

  const iconGroupStyle = {
    display: "flex",
    alignItems: "center",
    margin: "40px", 
  };

  const iconStyle = {
    width: "32px",
    height: "32px",
    color: COLORS.BLACK,
    cursor: "pointer",
    margin: "8px", 
  };

  const quantityStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: COLORS.BLACK,
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
    <div style={newComponentStyle}>
      <div>
        <div style={leftTextStyle}>하이카디플러스 HiCardi+</div>
        <div style={optionTextStyle}>갤럭시 A13 (+275,000원)</div>
      </div>
      <div style={iconGroupStyle}>
        <img onClick={handleDecrease} style={iconStyle} src={MinusButton} alt="Minus" />
        <span style={quantityStyle}>{quantity}</span>
        <img onClick={handleIncrease} style={iconStyle} src={PlusButton} alt="Plus" />
      </div>
    </div>
  );
};

export default SelectProduct;
