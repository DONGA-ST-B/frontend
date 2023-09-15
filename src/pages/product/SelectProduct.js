import React from "react";
import { COLORS } from "../../styles/colors";

const SelectProduct = () => {
  const newComponentStyle = {
    width: "100%",
    height: "140px",
    borderRadius: "20px",
    backgroundColor: "#F4F8FD",
    marginTop: "16px", // 선택한 메뉴와 간격 조절
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const textStyle = {
    color: COLORS.GRAY_600,
    fontSize: "B1",
  };

  return (
    <div style={newComponentStyle}>
      <span style={textStyle}>이 새로운 컴포넌트 내용</span>
    </div>
  );
};

export default SelectProduct;
